//TODO: needs to make it "reload safe"
var snow = {}; 


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

