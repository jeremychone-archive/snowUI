//TODO: needs to make it "reload safe"
var snow = snow || {}; 


// ---------------------- //
// ------ snow.ui  ------ //

snow.ui = (function(){
	
	function SUI(){};
	
	var _components = {};
	
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
		
		if (!_components[name]){
			var html = $.ajax({
				  url: "components/" + name + ".html",
				  async: false
				 }).responseText;
				 
			$(snow.ui.config.componentsHTMLHolder).append(html);
		}
		
	};
	
	
	/**
	 * Return the component definition for a given name. (load it if not found)
	 * @param {Object} name
	 */
	SUI.prototype.getComponent = function(name){
		//make sure it is loaded
		this.load(name);
		return _components[name];
	};
	
	/**
	 * MUST be called to register the component
	 * @param {String} name the name of the compoent
	 * @param {Object} definition the component definition, as: 
	 *    build {Function} (required) A function with the (ctx) argument which return the jQuery element of the HTMLElement to be displayed.
	 *    postDisplay {Function} (optional) This method will get called with the (ctx) augmented argument, after the HTMLElement is added to the DOM 
	 *                                      This is a good place to do non-visible logic, such as event bindings.
	 *    methods {Object of Functions} (optional) This allow to have custom methods on a component. The "this" context will be the HTMLElement of the component instance.  
	 */
	SUI.prototype.registerComponent = function(name,def){
		def.name = name;
		_components[name] = def;
	};
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
	 * ctx format: 
	 *    ctx.parent: {jQuery} jquery selector, html element, jquery object (default "body") 
	 *    ctx.animation: {String} the animation ("fromLeft" , "fromRight", or null) (default undefined)
	 *    ctx.replace: {jQuery} jquery selector string, html element, or jquery object (default undefined) of the element to be replaced
	 *    ctx.data: {Any} any data object. 
	 *    ctx.emptyBeforeAdd: {Boolean} (true
	 *    
	 * For build(ctx) the ctx will be augmented by: 
	 *    ctx.component: the component
	 * For postDisplay(ctx) the ctx will be augmented by:
	 *    ctx.$element: the jQuery object holding the new element returned by the component build() method
	 **/
	SUI.prototype.display = function(name,ctx){
		
	
		//get component and build params
		var component = this.getComponent(name);
		
		ctx = $.extend({component:component},this.defaultCtx,component.ctx,ctx);
		
		//Ask the component to build the new $element
		var $element = component.build(ctx);
		
		//attach the component to the element (and set the data-component attribute)
		$element.data("component",component);
		$element.attr("data-component",component.name);
		
		ctx.$element = $element;
		
		
		//render the element
		renderComponent(this,ctx);
		
		// Call the eventual postDisplay 
		// (we differ it to allow it to be displayed first)
		if (component.postDisplay){
			setTimeout(function(){
				component.postDisplay(ctx);
			},0);
		}
		
		//s = new Date().getTime();
		//debug("display: " + name + " : " + (new Date().getTime() - s));
			
		return $element;
		
	};


	//this should be private
	function renderComponent (sui,ctx){
	
		if (ctx.transition){
			var transition = sui.getTransition(ctx.transition);
			
			//TODO: support transition
			if (transition) {
				
				transition(ctx);
			}
		}
		//if no transition remove/show
		else{
			if (ctx.replace){
				$(ctx.replace).remove();
			}
			
			//note: if there is no parent, then, the sUI.diplay caller is reponsible to add it
			if (ctx.parent) {
				if (ctx.emptyParent){
					$(ctx.parent).empty();
				}
				$(ctx.parent).append(ctx.$element);
			}
		}
		
	};
	

	
	var sui = new SUI();

	// ------ Public configs ------ //
	sui.config = {
		componentsHTMLHolder: "body"
	}
	
	sui.defaultCtx = {
		parent: "body",
		emptyParent: false
	}
	// ------ /Public configs ------ //	
	
	return sui;
	
})();

// ------ snow.ui  ------ //
// ---------------------- //


// -------------------------- //
// ------ snow.logger  ------ //
//for now, just support console.log
//TODO: needs to support logger printer, formatter, and listener
(function(){
	var _config = {debugMode : false};
	
	snow.logger = {
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
			$.extends(_config,config); 
		}
	};	
	
	function consoleLog(text){
		if (console && console.log){
			console.log(text);
		}
	};
})();


// ------ snow.logger  ------ //
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

// ------ /snow.util  ------ //
// ------------------------ //


// ---------------------------------- //
// ------ snow.ua (User Agent) ------ //

snow.ua = (function(){
	
	function SUA(){};
	
	//privates
	var _hasTouch = null,
		_hasTransition = null,
		_hasWebkitTransition = null,
		_hasMozTransition = null;
	
	SUA.prototype.hasTouch = function(){
		if (_hasTouch === null){
			_hasTouch = isEventSupported("touchstart"); 
		};
		return _hasTouch;
	};
	
	SUA.prototype.hasTransition = function(){
		if (_hasTransition === null) {
			var div = document.createElement('div');
			div.innerHTML = '<div style="-webkit-transition:color 1s linear;-moz-transition:color 1s linear;"></div>';
			_hasWebkitTransition = (div.firstChild.style.webkitTransition !== undefined);
			_hasMozTransition = (div.firstChild.style.MozTransition !== undefined);
			delete div;
			_hasTransition = (_hasMozTransition || _hasWebkitTransition);
		}
		return _hasTransition;
	};
	
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
	})();	
	// ------ /Privates ------ //
	
	return new SUA();
})();

// ------ /snow.ua (User Agent) ------ //
// ---------------------------------- //

