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
	 * @param {Object} a the Array 
	 * @param {Object} from the first index to remove from
	 * @param {Object} to (optional) the last index to remove
	 */ 
	remove: function(a,from, to) {
	  var rest = a.slice((to || from) + 1 || a.length);
	  a.length = from < 0 ? a.length + from : from;
	  return a.push.apply(a, rest);
	},
	
	/**
	 * For a array of object, this will get the first index of the matching prop name/value 
	 * return -1 if no match
	 * @param {Object} a
	 * @param {Object} propName
	 * @param {Object} propValue
	 */
	getIndex: function(a,propName,propValue){
		if (a && propName && typeof propValue != "undefined"){
			var i,obj,l = a.length;
			for (var i = 0; i < l; i++){
				obj = a[i];
				if (obj && obj[propName] === propValue){
					return i;
				}
			}
		}
		return -1;
	},
	
	/**
	 * Sort an array of object by a propName
	 * @param {Object} a
	 * @param {Object} propName
	 */
	sortBy: function(a,propName){
		return a.sort(sortByFunc);
		function sortByFunc(a, b) {
			if (typeof a === "undefined") return -1;
			if (typeof b === "undefined") return 1;
			
		    var x = a[propName];
		    var y = b[propName];
		    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
		}
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
// ----------------------------------- //

// ----------------------- //
// ------ snow.gtx ------- //

//from: https://developer.mozilla.org/en/Code_snippets/Canvas
(function(){
	
	/**
	 * Factory/Constutor that build 
	 * @param {Object} arg can be a Canvas 2D Context element or a Canvas element.
	 */
    function Gtx(arg){
		var ctx = arg;
		// if it s a jquery object, get the first element (assume it is a canvas
		if (arg.jquery){
			arg = arg.get(0);
		}
		
		// if it is a cavans object.
    	if ($.isFunction(arg.getContext)){
			ctx = arg.getContext('2d');
		}
        
		// This allow to use the new or just the method as a factory
		if (!(this instanceof Gtx)) {
            return new Gtx(ctx);
        }
		
        this.context = this.ctx = ctx;
		
		//build the prototype methods on first demand 
        if (!this.beginPath) {
            setupPrototype();
        }
    }
	
	// ------ GTX Extension Methods ------ //
	// Set the referenceScale (the width and height that correspond to the 1 ratio)
	Gtx.prototype.referenceScale = function(refWidth,refHeight){
		this._refWidth = refWidth;
		this._refHeight = refHeight;
		
		// compute the ratio
		computeRatio.call(this);
		
		return this;
	}
	
	Gtx.prototype.fitParent = function(){
		var canvas = this.canvas();
		if (canvas){
			var canvas = this.canvas();
			var $parent = $(canvas).parent();
			//we might want to use innerWidth/Height here.
			canvas.width = $parent.width();
			canvas.height = $parent.height();
		}
		
		// compute the ratio
		computeRatio.call(this);
		
		return this;
	}
		
	// private Method to compute the ratio
	// Note that this will also compute offset to position the element center if the x and y ration 
	// are not identical
	function computeRatio(){
		var w = this.canvas().width; h = this.canvas().height;
		
		//TODO: probably need to test undefined and null, because 0 should be valid
		if (w && h && this._refWidth && this._refHeight){
			this._xRatio = w / this._refWidth;
			this._yRatio = h / this._refHeight;
			//TODO: this probably need to be fixed for not square artifacts
			if (this._xRatio <= this._yRatio ){
				this._ratio = this._xRatio;
				this._xOffset = 0;
				this._yOffset = (h - this._refHeight * this._ratio ) / 2;
			}else{
				this._ratio = this._yRatio;
				this._xOffset = (w - this._refWidth * this._ratio ) / 2;
				this._yOffset = 0;
			}
			 
			this.scallable = true;
		}
		
	}
	
	/**
	 * If this gtx object is scallable (was set a referenceScale), then apply the ratio
	 * to the x argument otherwise return unchanged value.
	 * @param {Object} x
	 */
	Gtx.prototype.scaleX = function(x){
		if (this.scallable){
			return this._ratio * x + this._xOffset;
		}
		return x;
	}
	
	/**
	 * If this gtx object is scallable (was set a referenceScale), then apply the ratio
	 * to the y argument otherwise return unchanged value.
	 * @param {Object} x
	 */	
	Gtx.prototype.scaleY = function(y){
		if (this.scallable){
			return this._ratio * y + this._yOffset;
		}
		return y;
	}
	
	/**
	 * Scale the value with the overall computed ratio.
	 * @param {Object} val
	 */
	Gtx.prototype.scaleVal = function(val){
		if (this.scallable){
			return this._ratio * val;
		}
		return val;		
	}
	
	
	Gtx.prototype.clear = function(){
		if (this.canvas()){
			//this should create a clear
			this.canvas().width = this.canvas().width;
		}	
		// if no canvas (was created with a context), just ignore.
		
		return this;
	}
	
 
	// ------ /Extension Methods ------ //
	
	// ------ Context override methods ------ //
	Gtx.prototype.arc = function(x,y,radius,startAngle,endAngle,antiClock){
		if (this.scallable){
			x = this.scaleX(x);
			y = this.scaleY(y);
			radius = this.scaleVal(radius);
		}
		this.context.arc(x,y,radius,startAngle,endAngle,antiClock);
		
		return this;
	}
	
	Gtx.prototype.arcTo = function(x1,y1,x2,y2,radius){
		if (this.scallable){
			x1 = this.scaleX(x1);
			y1 = this.scaleY(y1);
			x2 = this.scaleX(x2);
			y2 = this.scaleY(y2);
			radius = this.scaleVal(radius);
		}
		this.context.arcTo(x1,y1,x2,y2,radius);
		
		return this;		
	}
	
	//(in double cp1x, in double cp1y, in double cp2x, in double cp2y, in double x, in double y);
	Gtx.prototype.bezierCurveTo = function(cp1x,cp1y,cp2x,cp2y,x,y){
		if (this.scallable) {
			cp1x = this.scaleX(cp1x);
			cp1y = this.scaleY(cp1y);
			cp2x = this.scaleX(cp2x);
			cp2y = this.scaleY(cp2y);
			x = this.scaleX(x);
			y = this.scaleY(y);
		}
		this.context.bezierCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
		return this;
	}
	
	//(in double cpx, in double cpy, in double x, in double y);
	Gtx.prototype.quadraticCurveTo = function(cpx,cpy,x,y){
		if (this.scallable) {
			cpx = this.scaleX(cpx);
			cpy = this.scaleY(cpy);
			x = this.scaleX(x);
			y = this.scaleY(y);
		}
		this.context.quadraticCurveTo(cp1x,cp1y,cp2x,cp2y,x,y);
		return this;
	}
	
	Gtx.prototype.rect = function(x,y,w,h){
		return execRect.call(this,"rect",x,y,w,h);	
	}
	Gtx.prototype.clearRect = function(x,y,w,h){
		return execRect.call(this,"clearRect",x,y,w,h);	
	}
	Gtx.prototype.fillRect = function(x,y,w,h){
		
		return execRect.call(this,"fillRect",x,y,w,h);	
	}
	Gtx.prototype.strokeRect = function(x,y,w,h){
		return execRect.call(this,"strokeRect",x,y,w,h);	
	}
	
	//private execRect
	function execRect(methodName,x,y,w,h){
		
		if (this.scallable) {
			x = this.scaleX(x);
			y = this.scaleY(y);
			w = this.scaleX(w);
			h = this.scaleY(h);
		}
		this.context[methodName](x,y,w,h);
		return this;			
	}	
	
	Gtx.prototype.moveTo = function(x,y){
		if (this.scallable){
			x = this.scaleX(x);
			y = this.scaleY(y);
		}
		this.context.moveTo(x,y);
		return this;
	}
	
	Gtx.prototype.lineTo = function(x,y){
		if (this.scallable){
			x = this.scaleX(x);
			y = this.scaleY(y);
		}
		this.context.lineTo(x,y);
		return this;		
	}
	
	

	
	// create the chainable object for gradient
	Gtx.prototype.createLinearGradient = function(x0,y0,x1,y1){
		if (this.scallable){
			x0 = this.scaleX(x0);
			y0 = this.scaleY(y0);
			x1 = this.scaleX(x1);
			y1 = this.scaleY(y1);
		}
		var ctxGradient = this.ctx.createLinearGradient(x0,y0,x1,y1);
		var gtxGradient = new Gradient(ctxGradient);
		return gtxGradient;
	}
	
	// create the chainable object for gradient
	//(in double x0, in double y0, in double r0, in double x1, in double y1, in double r1);
	Gtx.prototype.createRadialGradient = function(x0,y0,r0,x1,y1,r1){
		if (this.scallable){
			x0 = this.scaleX(x0);
			y0 = this.scaleY(y0);
			r0 = this.scaleVal(r0);
			x1 = this.scaleX(x1);
			y1 = this.scaleY(y1);
			r1 = this.scaleVal(r1);
			
		}		
		var ctxGradient = this.ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
		var gtxGradient = new Gradient(ctxGradient);
		return gtxGradient;		
	}
	
	Gtx.prototype.fillStyle = function(arg){
		return style(this,"fillStyle",arg);
	}
	
	Gtx.prototype.strokeStyle = function(arg){
		return style(this,"strokeStyle",arg);
	}
	
	function style(g,type,arg){
		// if getter
		if (!arg){
			return g.ctx[type];
		}
		
		// if it is a gradient object, extract the value
		if (arg.ctxGradient){
			arg = arg.ctxGradient;
		}
		
		g.ctx[type] = arg;
		return g;
	}
	
	// ------ /Context override methods ------ // 
	
	// ------ Gradient ------ //
	function Gradient(ctxGradient){
		this.ctxGradient = ctxGradient;
	}
	
	Gradient.prototype.addColorStop = function(){
		this.ctxGradient.addColorStop.apply(this.ctxGradient,arguments);
		return this;	
	}
	
	Gradient.prototype.addColorStops = function(){
		for (var i = 0 ; (i + 1) < arguments.length; i+=2){
			this.ctxGradient.addColorStop(arguments[i],arguments[i+1]);	
		}
		
		return this;	
	}
	// ------ /Gradient ------ //
	
	
    function setupPrototype(){
        var methods = [ 'beginPath', 'clip', 'closePath', 'drawImage', 'fill',  'fillText', 
		// these  are managed now 'arc','arcTo', 'lineTo', 'moveTo', 'bezierCurveTo', 'quadraticCurveTo', 'rect',,  'clearRect','fillRect','strokeRect',
		 'restore', 'rotate', 'save', 'scale', 'setTransform', 'stroke',  'strokeText', 'transform', 'translate'];
        
        var getterMethods = ['createPattern', 'drawFocusRing', 'isPointInPath', 'measureText', // drawFocusRing not currently supported
        // The following might instead be wrapped to be able to chain their child objects
        'createImageData', 'getImageData', 'putImageData' // will wrap later
		// both of those are wrapped now >> 'createLinearGradient', 'createRadialGradient', 
        ];
        
        var props = ['canvas', 
		  // we are wrapping this one >> 'strokeStyle', 'fillStyle',
         'font', 'globalAlpha', 'globalCompositeOperation', 'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor',  'textAlign', 'textBaseline'];
        
        var gmethl, propl;
        for (var i = 0, methl = methods.length; i < methl; i++) {
            var m = methods[i];
            Gtx.prototype[m] = (function(m){
                return function(){
                    this.ctx[m].apply(this.ctx, arguments);
                    return this;
                };
            }(m));
        }
        
        for (i = 0, gmethl = getterMethods.length; i < gmethl; i++) {
            var gm = getterMethods[i];
            Gtx.prototype[gm] = (function(gm){
                return function(){
                    return this.ctx[gm].apply(this.ctx, arguments);
                };
            }(gm));
        }
        
        for (i = 0, propl = props.length; i < propl; i++) {
            var p = props[i];
            Gtx.prototype[p] = (function(p){
                return function(value){
                    if (typeof value === 'undefined') {
                        return this.ctx[p];
                    }
                    this.ctx[p] = value;
                    return this;
                };
            }(p));
        }
    };
	
	
	
	snow.gtx = Gtx;
})();

// ------ /snow.gtx ------- //
// ----------------------- //
