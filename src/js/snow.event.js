// sTouch
(function($){

    /**
     * This event either bind a touchend if available, otherwise, bind a click.
     * In future iterations, we might want make the "touch" case a little bit more advanced (checking touchstart/touchend are from the same element and no drag was initiated)
     * @param {Function or String} arg0 can be the function or a "delegate" selector string if we want this event to be delegated
     * @param {Function} arg1 if arg0 is the del
     */
    $.fn.sTouch = function(arg0, arg1){
        var callback = arg1 || arg0;
        var delegate = (arg1) ? arg0 : null;
        
        var eventName = (snow.ua.hasTouch()) ? "touchend" : "click";
		
        return this.each(function(){
            var $this = $(this);
            
            if (delegate) {
                $this.delegate(delegate, eventName, callback);
            }
            else {
                $this.bind(eventName, callback);
            }
            
            
        });
        
    };
    
    // samplePlugin default options
    $.fn.sTouch.defaults = {};
    
})(jQuery);

// sDrag
(function($){
	const SDRAGSTART="sDragStart",SDRAGDRAG="sDragDrag",SDRAGEND="sDragEnd";
    /**
     *
     * Options optional method implementation:
     *
     *
     */
    var mouseDragEvents = {
        start: "mousedown",
        drag: "mousemove",
        end: "mouseup"
    }
    
    var touchDragEvents = {
        start: "touchstart",
        drag: "touchmove",
        end: "touchend"
    }
    
    var hasTouch = snow.ua.hasTouch();
    
    
    /**
     * Drag event for mouse and touch based devices. 
     *
     * @param {Object} delegate (optional) if present, this will do a delegate (not implemented yet)
     * @param {Object} opts options and handlers
     * @param {Function} opts.start=function(event,extra) [optional] will be called when the drag is initiated
     * @param {Function} opts.drag=function(event,extra) [optional] will be called for every drag event (either mousemouve or touchmove)
     * @param {Function} opts.end=function(event,extra) [optional] called on mouseUp or touch end
     * @param {Number} extra.pageX the current pageX 
     * @param {Number} extra.pageY the current pageY 
     * @param {Number} extra.startPageX the pageX from the drag start
     * @param {Number} extra.startPageY the pageY from the drag start
     * @param {Number} extra.deltaPageX the delta between the current pageX and the last one (from the previous drag event)
     * @param {Number} extra.deltaPageY the delta between the current pageY and the last one (from the previous drag event)
     * 
     *
     * TODO: needs to send jQuery event rather than hardcoding calls to events. <br />
     * TODO: needs to find a solution for touch vs mouse move box-bounding difference
     */
    $.fn.sDrag = function(delegate, opts){
        var options = opts || delegate;
        var delegate = (opts) ? delegate : null;
        
        
        var dragEvents = (hasTouch) ? touchDragEvents : mouseDragEvents;
        
        //for now, support the not delegatable way
        // iterate and process each matched element
        return this.each(function(){
            var $this = $(this); // jQuery object for this element
            if (delegate == null) {
				(options.start)?$this.bind(SDRAGSTART,options.start):null;
				(options.drag)?$this.bind(SDRAGDRAG,options.drag):null;
				(options.end)?$this.bind(SDRAGEND,options.end):null;
							
                $this.bind(dragEvents.start, function(e){
                   	handleDragEvent.call(this,e,options);
                });
            }else{

				(options.start)?$this.delegate(delegate,SDRAGSTART,options.start):null;
				(options.drag)?$this.delegate(delegate,SDRAGDRAG,options.drag):null;
				(options.end)?$this.delegate(delegate,SDRAGEND,options.end):null;	
				
				$this.delegate(delegate,dragEvents.start,function(e){
					handleDragEvent.call(this,e,options);
				})
			}
        });
        
		// Handler the event
		// "this" of this function will be the element
        function handleDragEvent(e, options){
			var $this = $(this);
            
            var $handle = $(this);
            
            var $document = $(document);
            var id = "_" + snow.util.uuid(7);
            
			var extra = buildExtra(e,$handle,SDRAGSTART);
            $this.trigger(SDRAGSTART,[extra]);
            
			// since we create "meta events" we consume this one
            e.preventDefault();
            e.stopPropagation();
			
            $document.bind(dragEvents.drag + "." + id, function(e){
				extra = buildExtra(e,$handle,SDRAGDRAG);
            	$this.trigger(SDRAGDRAG,[extra]);
				
				// since we create "meta events" we consume this one	
                e.preventDefault();
				e.stopPropagation();
            });
            
            $document.bind(dragEvents.end + "." + id, function(e){
                var extra = buildExtra(e,$handle,SDRAGEND);
            	$this.trigger(SDRAGEND,[extra]);
				
                $(document).unbind(dragEvents.drag + "." + id);
                $(document).unbind(dragEvents.end + "." + id);
				
				// since we create "meta events" we consume this one
                e.preventDefault();
				e.stopPropagation();
            });
        }
        
    }
    
	
	// assumed that the event has been fixed
	function buildExtra(event,$handle,dragType){
		fixTouchEvent(event);
		var extra = {
			eventSource: event,
			pageX: event.pageX,
			pageY: event.pageY			
		};
		
		var oe = event.originalEvent;
		if (hasTouch){
			extra.touches = oe.touches;
		}
		
		var currentState = $handle.data("_sDrag_currentState");
		if (!currentState){
			currentState = {};
			$handle.data("_sDrag_currentState",currentState);
		}
		
		if (dragType === SDRAGSTART){
			currentState.startPageX = extra.startPageX = extra.pageX;
			currentState.startPageY = extra.startPageY = extra.pageY;
			
			currentState.lastPageX = currentState.startPageX = extra.startPageX;
			currentState.lastPageY = currentState.startPageY = extra.startPageY;
		}else if (dragType === SDRAGEND){
			// because, on iOs, the touchEnd event does not have the .touches[0].pageX
			extra.pageX = currentState.lastPageX;
			extra.pageY = currentState.lastPageY;
			$handle.data("_sDrag_currentState",null);
		}
		
		extra.startPageX = currentState.startPageX;
		extra.startPageY = currentState.startPageY;
		extra.deltaPageX = extra.pageX - currentState.lastPageX;
		extra.deltaPageY = extra.pageY - currentState.lastPageY;
		
		currentState.lastPageX = extra.pageX;
		currentState.lastPageY = extra.pageY;
		return extra;
	}
    
    /**
     * First attempt to fix the touchEvent to make it more mouse like
     * @param {Object} e
     */
    function fixTouchEvent(e){
        if (hasTouch) {
            var oe = e.originalEvent;
			
            if (oe.touches.length > 0) {
                e.pageX = oe.touches[0].pageX;
                e.pageY = oe.touches[0].pageY;
            }
        }
        
        return e;
    }
    
    
})(jQuery);
