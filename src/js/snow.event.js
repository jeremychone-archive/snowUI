(function($) {

  /**
   * This event either bind a touchend if available, otherwise, bind a click.
   * In future iterations, we might want make the "touch" case a little bit more advanced (checking touchstart/touchend are from the same element and no drag was initiated)
   * @param {Function or String} arg0 can be the function or a "delegate" selector string if we want this event to be delegated
   * @param {Function} arg1 if arg0 is the del
   */
  $.fn.sTouch = function(arg0,arg1) {
	  var callback = arg1 || arg0;
	  var delegate = (arg1)?arg0:null;

	  var eventName = (snow.ua.hasTouch())?"touchend":"click"; 	
      return this.each(function() {
          var $this = $(this); 
          
		  if (delegate){
		  	  $this.delegate(delegate,eventName,callback);
		  }else{
		  	  $this.bind(eventName,callback);	
		  }
		  
          
      }); 

   }; 

  // samplePlugin default options
  $.fn.sTouch.defaults = {};

})(jQuery);

(function($) {

/**
 * 
 * Options optional method implementation: 
 * 
 * 
 */
var mouseDragEvents = {
	start: "mousedown",
	drag: "mousemove",
	stop: "mouseup"
}

var touchDragEvents = {
	start: "touchstart",
	drag: "touchmove",
	stop: "touchend"
}

var hasTouch = snow.ua.hasTouch();


/**
 * A first implementation at adrag  
 * 
 * @param {Object} delegate (optional) if present, this will do a delegate (not implemented yet)
 * @param {Object} opts options and handlers
 * opts.start(event) // will be called when the drag is initiated
 * opts.drag(event) // will be called for every drag event (either mousemouve or touchmove)
 * opts.stop(event) // called on mouseUp or drag
 * 
 * TODO: needs to send jQuery event rather than hardcoding calls to events
 * TODO: needs to find a solution for touch vs mouse move box-bounding difference
 */
$.fn.sDraggable = function(delegate, opts){
	var options = opts || delegate;
	var delegate = (opts)?delegate:null;
	
	
	var dragEvents = (hasTouch)?touchDragEvents:mouseDragEvents;
	
	//for now, support the not delegatable way
	  // iterate and process each matched element
      return this.each(function() {
          var $this = $(this); // jQuery object for this element
          if (delegate == null){
		  	$this.bind(dragEvents.start,function(e){
				fixTouchEvent(e);
				var $handle = $(this);
				
				var $document = $(document);
				var id = "_" + snow.util.uuid(7);
				
				if (options.start){
					options.start(e);
				}
				
				e.preventDefault();
				
				$document.bind(dragEvents.drag + "." + id,function(e){
					fixTouchEvent(e);
					if (options.drag){
						options.drag(e);
					}
					e.preventDefault();
				});
				
				$document.bind(dragEvents.stop + "." + id,function(e){
					fixTouchEvent(e);
					if (options.stop){
						options.stop(e);
					}
					$(document).unbind(dragEvents.drag + "." + id);
					$(document).unbind(dragEvents.stop + "."+ id);
					e.preventDefault();
				});
			});
		  }
      }); 

}


/**
 * First attempt to fix the touchEvent to make it more mouse like
 * @param {Object} e
 */
function fixTouchEvent(e){
	if (hasTouch){
		var oe = e.originalEvent;
		if (oe.touches.length > 0){
			e.pageX = oe.touches[0].pageX;
			e.pageY = oe.touches[0].pageY;
		}
	}
	
	return e;
}

	
})(jQuery);
