//TODO: needs to make it "reload safe"
var snow = snow || {}; 


// ---------------------- //
// ------ snow.ui  ------ //

snow.ui = (function(){
	
	function SUI(){};
	
	var _componentDefStore = {};
	
	var _transitions = {};
	
	// ------ Component Management ------ //
	/**
	 * Load a component from a name. 
	 * + It will load the component only if it not already loaded (snow.ui does not support component reload)
	 * + As of now, the component is loaded by loading (via sync-AJAX class) and adding the "components/[name].html" content to the "body" (can be overriden with snow.ui.config.componentsHTMLHolder)
	 * + So, developers need to make sure of the following: 
	 *   - the "component/[name].html" exists (relative to the current page) and does not contain any visible elements
	 *   - the "component/[name].html" will call the snowui.registerComponent([name],componentDef) 
	 * 
	 * TODO: Needs to make the the component 
	 * @param {Object} name component name (no space or special character)
	 */
	SUI.prototype.load = function(name){
		
		if (!_componentDefStore[name]){
			var html = $.ajax({
				  url: "components/" + name + ".html",
				  async: false
				 }).responseText;
				 
			$(snow.ui.config.componentsHTMLHolder).append(html);
			
			if (!_componentDefStore[name]){
				snow.log.error("Fail to load component [" + name + "]");
			}
		}
		
		
	};
	
	
	/**
	 * Return the component definition for a given name. (load it if not found)
	 * @param {Object} name
	 */
	SUI.prototype.getComponentDef = function(name){
		//make sure it is loaded
		this.load(name);
		return _componentDefStore[name];
	};
	
	/**
	 * MUST be called to register the component
	 * @param {String} name: the name of the component
	 * @param {Object or Function} componentFactory: (Required) Factory function or "object template" that will be called or cloned for each component instance (each time snow.ui.display gets called). 
	 * 							   A "Component" object can have the following methods  
	 *                                 {Function} componentFactory.build(data,config):       (required) function that will be called with (data,config) to build the $element.
	 *                                 {Function} componentFactory.postDisplay(data,config): (optional) This method will get called with (data,config) after the build method (postDisplay is deferred for performance optimization) 
	 *                                                                                       Since this call will be deferred, it is a good place to do non-visible logic, such as event bindings.
     * @param {config} config: a config object  
	 *    config.parent:      {jQuery} jquery selector, html element, jquery object (if not set, the the element will not be added in the rendering logic)
	 *                              Note 1) If ctx.parent is absent from the component definition and from this method call, the snow.ui will not append the returned element to the DOM.
	 *                                      So, if ctx.parent is null, then the build() must take care of adding the elements to the DOM. However, the postDisplay will still be called.
	 *    config.animation:   {String} the animation ("fromLeft" , "fromRight", or null) (default undefined)
	 *    config.replace:     {jQuery} jquery selector string, html element, or jquery object (default undefined) of the element to be replaced
	 *    config.emptyParent: {Boolean} if set/true will call empty() on the parent before adding the new element (default false). Valid only if no transition and build return an element
	 *    config.unique:      {Boolean} if true, the component will be display only if there is not already one component with the same name in the page.
	 */
	SUI.prototype.registerComponent = function(name,config,componentFactory){
		var def = {};
		def.name = name;
		def.componentFactory = componentFactory;
		def.config = config;
		_componentDefStore[name] = def;
	};
	
	/**
	 * This just instantiate a new component for a given name. This is useful for manipulating the component off lifecycle
	 * for performance. For example, sometime building a component and displaying in the background (with z-index) allow the browser
	 * to do its caching magic, and can speed up the first appearance of the component when it is due. 
	 * @param {Object} name
	 */
	SUI.prototype.instantiateComponent = function(name){
		var componentDef = this.getComponentDef(name);
		return instantiateComponent(componentDef);
	}
	// ------ /Component Management ------ //
	
	// ------ Transition Management ------ //
	SUI.prototype.registerTransition = function(name,transition){
		_transitions[name] = transition;
	}

	SUI.prototype.getTransition = function(name){
		return _transitions[name];
	}
	// ------ /Transition Management ------ //
	
	// ------ Display Management ------ //

	/**
	 * This will create, build, and display a new component. It will load the component on demand if needed.
	 * @param {Object} name (required) the component name
	 * @param {Object} data (optional, required if config) the data to be passed to the build and postDisplay.
	 * @param {Object} config (optional) config override the component config
	 */
	SUI.prototype.display = function(componentName,data,config){
		return process(sui,componentName,data,config);
	};
	
	/**
	 * Same as snow.ui.display... but bypass the build() step. 
	 * So, this will create a new component and attach it to the $element and call postDisplay on it.
	 * 
	 */
	SUI.prototype.attach = function(componentName,$element,data,config){
		return process(sui,componentName,data,config,$element);
	}
	// ------ /Display Management ------ //

	//if $element exist, then, bypass the build
	function process(sui,name,data,config,$element){
		var componentDef = sui.getComponentDef(name);
		
		config = buildConfig(componentDef,config);
		
		var component = instantiateComponent(componentDef);
		
		//if the config.unique is set, and there is a component with the same name, abort
		//TODO: an optimization point would be to add a "sComponentUnique" in the class for data-scomponent that have a confi.unique = true
		//      This way, the query below could be ".sComponentUnique [....]" and should speedup the search significantly on UserAgents that supports the getElementsByClassName
		if (config.unique && $("[data-scomponent='" + name + "']").length > 0){
			return null;
		}
		
		// if there is no element, we invoke the build
		if (!$element) {
			//Ask the component to build the new $element
			$element = invokeBuild(component, data, config);
		}
		
		//if there is an element, then, manage the rendering logic. 
		if ($element) {
			//make sure we get the jQuery object
			$element = $($element);
			
			bind$element($element, component, data, config);
			
			//render the element
			renderComponent(sui, component, data, config);
			
			
			
		} 
		
		invokePostDisplay(component, data, config);
		
		return component;		
	}

	function renderComponent (sui,component,data,config){
	
		if (config.transition){
			var transition = sui.getTransition(config.transition);
			
			if (transition) {
				transition(component,data,config);
			}else{
				snow.log.error("Transition [" + config.transition + "] not found. Transitions need to be registered via snow.ui.registerTranstion(..) before call.");
			}
		}
		//if no transition remove/show
		else{
			if (config.replace){
				$(config.replace).remove();
			}
			
			//note: if there is no parent, then, the sUI.diplay caller is reponsible to add it
			if (config.parent) {
				if (config.emptyParent){
					$(config.parent).empty();
				}
				$(config.parent).append(component.$element);
			}
		}
		
	};
	

	// ------ Private Helpers ------ //
	// build a config for a componentDef
	function buildConfig(componentDef,config){
		var instanceConfig = $.extend({},this.defaultComponentConfig,componentDef.config,config);
		instanceConfig.componentName = componentDef.name; 
		return instanceConfig;
	}
	
	function instantiateComponent(componentDef){
		var component; 
		var componentFactory = componentDef.componentFactory;
		if (componentFactory ){
			// if it is a function, call it, it should return a new component object
			if ($.isFunction(componentFactory)) {
				component = componentFactory();
			}
			// if it is a plainObject, then, we clone it (NOTE: We do a one level clone)
			else if ($.isPlainObject(componentFactory)){
				component = $.extend({},componentFactory);
			}else{
				snow.log.error("Invalid ComponentFactory for component [" + componentDef.componentName + "]. Only types Function or Object are supported as componentFactory. Empty component will be created.");				
			}
		}else{
			snow.log.error("No ComponentFactory for component [" + componentDef.componentName + "]");
		}
		
		if (component){
			component.name = componentDef.componentName;
		}
		return component;		
	}
	
	function invokeBuild(component, data, config){
		//assert that we have a build method
		if (!component.build || !$.isFunction(component.build)){
			snow.log.error("Invalid 'build' function for component [" + component.name + "].");
			return;
		}
		return component.build(data,config);
	}
	
	// 
	function bind$element($element,component,data,config){
		component.$element = $element;
		$element.data("component",component);

		$element.attr("data-scomponent", config.componentName);
	}	
	
	

	function invokePostDisplay(component,data,config){
		// Call the eventual postDisplay 
		// (differing for performance)
		if (component.postDisplay) {
			setTimeout(function(){
				component.postDisplay(data,config);
			}, config.postDisplayDelay);
		}
	}	
	// ------ /Private Helpers ------ //
	
	var sui = new SUI();

	// ------ Public configs ------ //
	sui.config = {
		componentsHTMLHolder: "body"
	}
	
	sui.defaultComponentConfig = {
		emptyParent: false,
		postDisplayDelay: 0
	}
	// ------ /Public configs ------ //	
	
	return sui;
	
})();

// ------ snow.ui  ------ //
// ---------------------- //


(function($) {

  /**
   * Return the component object for which this HTMLElement belong too. 
   * 
   * If a componentName is given then it will try to find the given component. 
   * 
   * If no componentName is given, then it will return the first component found.
   * 
   * @param {componentName} The component name. If absent, then it will take the first element that has a component attached.
   * 
   */
  $.fn.sComponent = function(componentName) {
	  
      // iterate and process each matched element
	  	var $componentElement; 
		if (componentName) {
			$componentElement = $(this).closest("[data-scomponent='" + componentName + "']");
		}else{
			$componentElement = $(this).closest("[data-scomponent]");
		}
		
		return $componentElement.data("component");
 
   }; 

})(jQuery);


// -------------------------- //
// ------ snow.log  ------ //
//for now, just support console.log
//TODO: needs to support logger printer, formatter, and listener
(function(){
	var _config = {debugMode : false};
	
	snow.log = {
		info: function(text){
			consoleLog(text);
		},
		
		error: function(text){
			consoleLog("ERROR - " + text);
		}, 
		
		debug: function(text){
			if (_config.debugMode){
				consoleLog("DEBUG - " + text);	
			}
		},
		
		setConfig: function(config){
			$.extend(_config,config); 
		}
	};	
	
	function consoleLog(text){
		if (window.console && window.console.log){
			console.log(text);
		}
	};
})();


// ------ snow.log  ------ //
// -------------------------- //

// ------------------------ //
// ------ snow.util  ------ //

snow.util = {};

/**
 * snow.util.uuid
 * Usage: 
 *    snow.util.uuid(); // returns "92329D39-6F5C-4520-ABFC-AAB64544E172"
 *    Math.uuid(15);    // 15 character ID (default base=62), returns "VcydxgltxrVZSTV"
 *    Math.uuid(8, 2);  // returns "01001010"
 *    
 * @from Math.uuid 2010 Robert Kieffer http://www.broofa.com
 */
(function() {
  // Private array of chars to use
  var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''); 

  snow.util.uuid =  function (len, radix) {
    var chars = CHARS, uuid = [];
    radix = radix || chars.length;

    if (len) {
      // Compact form
      for (var i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (var i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  };
})();


snow.util.array = {
	
	/**
	 * Remove item(s) from an array.
	 * 
	 * @from: Array Remove - By John Resig (MIT Licensed)
	 * 
	 * @param {Object} a
	 * @param {Object} from
	 * @param {Object} to
	 */ 
	remove: function(a,from, to) {
	  var rest = a.slice((to || from) + 1 || a.length);
	  a.length = from < 0 ? a.length + from : from;
	  return a.push.apply(a, rest);
	}
}

snow.util.randomInt = function (from,to){
	var offset = to - from;
	return from + Math.floor(Math.random() * (offset + 1));
}

// from the "JavaScript Pattern" book
snow.util.inherit = function (C,P){
	var F = function() {};
	F.prototype = P.prototype;
	C.prototype = new F();
	C.prototype.parent = P.prototype;
	C.prototype.constructor = C;
};

// ------ /snow.util  ------ //
// ------------------------ //


// ---------------------------------- //
// ------ snow.ua (User Agent) ------ //

snow.ua = (function(){
	var WEBKIT_PREFIX = "-webkit-",
	    MOZ_PREFIX = "-moz-";
		
	function SUA(){};
	
	//privates
	var _hasTouch = null,
		_hasTransition = null,
		_transitionPrefix = null,
		_eventsMap = {}; // {eventName:true/false,....}
	
	
	SUA.prototype.hasEvent = function(eventName){
		var r = _eventsMap[eventName];
		if (typeof r === "undefined"){
			r = isEventSupported(eventName);
			_eventsMap[eventName] = r; 
		}
		return r;
	}
	
	
	SUA.prototype.hasTouch = function(){
		return this.hasEvent("touchstart");
	}
	
	SUA.prototype.transitionPrefix = function(){
		if (this.hasTransition()){
			return _transitionPrefix;
		}else{
			return null;
		}
	}
	
	SUA.prototype.hasTransition = function(){
		if (_hasTransition === null) {
			var div = document.createElement('div');
			div.innerHTML = '<div style="-webkit-transition:color 1s linear;-moz-transition:color 1s linear;"></div>';
			_transitionPrefix = (div.firstChild.style.webkitTransition !== undefined)?WEBKIT_PREFIX:_transitionPrefix;
			_transitionPrefix = (div.firstChild.style.MozTransition !== undefined)?MOZ_PREFIX:_transitionPrefix;
			delete div;
			_hasTransition = (_transitionPrefix != null);
		}
		return _hasTransition;
	}
	
	// ------ Privates ------ //
	var isEventSupported = (function(){
		var TAGNAMES = {
			'select': 'input',
			'change': 'input',
			'submit': 'form',
			'reset': 'form',
			'error': 'img',
			'load': 'img',
			'abort': 'img'
		}
		function isEventSupported(eventName){
			var el = document.createElement(TAGNAMES[eventName] || 'div');
			eventName = 'on' + eventName;
			var isSupported = (eventName in el);
			if (!isSupported) {
				el.setAttribute(eventName, 'return;');
				isSupported = typeof el[eventName] == 'function';
			}
			el = null;
			return isSupported;
		}
		return isEventSupported;
	})()	
	// ------ /Privates ------ //
	
	return new SUA();
})();

// ------ /snow.ua (User Agent) ------ //
// ---------------------------------- //

