var snow = snow || {};

/**
 * @namespace snow.event convenient touch/mouse event helpers.
 */
snow.event = snow.event || {};

// ------ snow event helpers ------ //
(function($){
	var hasTouch = snow.ua.hasTouch();
	/**
     * if it is a touch device, populate the event.pageX and event.page& from the event.touches[0].pageX/Y
     * @param {jQuery Event} e the jquery event object 
     */
    snow.event.fixTouchEvent = function(e){
        if (hasTouch) {
            var oe = e.originalEvent;
			
            if (oe.touches.length > 0) {
                e.pageX = oe.touches[0].pageX;
                e.pageY = oe.touches[0].pageY;
            }
        }
        
        return e;
    }
    
    /**
     * Return the event {pageX,pageY} object for a jquery event object (will take the touches[0] if it is a touch event)
     * @param {jQuery Event} e the jquery event object
     */
    snow.event.eventPagePosition = function(e){
		if (e.originalEvent && e.originalEvent.touches){
			pageX = e.originalEvent.touches[0].pageX;
			pageY = e.originalEvent.touches[0].pageY;
		}else{
			pageX = e.pageX;
			pageY = e.pageY;
		}
		return {
			pageX: pageX,
			pageY: pageY
		}
    }
})(jQuery);

// ------ /snow event helpers ------ //

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

// sDrag & sDrop
(function($){
	const SDRAGSTART="sdragstart",SDRAGDRAG="sdrag",SDRAGEND="sdragend";
	
	const SDRAGENTER="sdragenter",SDRAGOVER="sdragover",SDRAGLEAVE="sdragleave",SDROP="sdrop";
	
	
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
     * Drag event for mouse and touch based user agents. 
     * 
     * This fires sdragstart, sdrag, and sdragend events on the dragged element, 
     * and sdragenter, sdragleave, sdrop on the "overElement" if the opts.draggable is set to true. If opts.draggable is omitted or false, then
     * only the events on the dragged element will be fired. 
     * 
     * See code sample at /test/test_snow.event.02.sDrag.html for more infor 
     *
     * @param {String} delegate (optional) if present, this will do a delegate (not implemented yet)
     * @param {Object}   opts [optional] options and handlers
     * @param {Boolean}  opts.draggable [default false] tell if the element is draggable
     * @param {String|Function}   opts.helper [default 'original'] if opts.draggable is true, this will determine the strategy for the drag helper. 
     *                               Can be 'clone' 'original' or a function
     * @param {Function} opts.start=function(event,dragExtra) [optional] will be called when the drag is initiated
     * @param {Function} opts.drag=function(event,dragExtra) [optional] will be called for every drag event (either mousemouve or touchmove)
     * @param {Function} opts.end=function(event,dragExtra) [optional] called on mouseUp or touch end
     * @param {Number} dragExtra.pageX the current pageX 
     * @param {Number} dragExtra.pageY the current pageY 
     * @param {Number} dragExtra.startPageX the pageX from the drag start
     * @param {Number} dragExtra.startPageY the pageY from the drag start
     * @param {Number} dragExtra.deltaPageX the delta between the current pageX and the last one (from the previous drag event)
     * @param {Number} dragExtra.deltaPageY the delta between the current pageY and the last one (from the previous drag event)
     * @param {DOMElement} dragExtra.overElement this is for sdrag and sdragend event, and represent the over element (the drop over element) if the opts.draggable was set to true
     * @param {DOMElement} dragExtra.helperElement this is the element that is used for the drag effect. Could be the same as the draggable element, or a clone or custom element.
     */
    $.fn.sDrag = function(delegate, opts){
        var options = opts || delegate;
        var delegate = (opts) ? delegate : null;
        
        options = $.extend({},$.fn.sDrag.defaults,options);
        
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
			//var $this = $(this);
            
            var $elem = $(this);
            
            var $document = $(document);
            var id = "_" + snow.util.uuid(7);
            
            
            //create the sDragCtx
            $elem.data("sDragCtx",{});
            
            // create the $helper if it is a draggable event.
            var $helper; 
			if (options.draggable === true){
				if ($.isFunction(options.helper)){
					$helper = $(options.helper.call($elem.get(0)));
				}else if (options.helper === "original"){
					$helper = $elem;
				}else if (options.helper === "clone"){
					$helper = $elem.clone();
					// make sure to remove the DOMElement ID
					$helper.attr("id",null);
					$helper.css("position","absolute");
					var elemPos = $elem.position();
					$helper.css({
						top: elemPos.top,
						left: elemPos.left
					})
					//todo need to allow configurable helper parent (right now, it is the $elem parent)
					$elem.parent().append($helper);					
				}
				
			}
			
			var extra = buildDragExtra(e,$elem,$helper,SDRAGSTART);
            $elem.trigger(SDRAGSTART,[extra]);
            
			
			// since we create "meta events" we consume this one
            e.preventDefault();
            e.stopPropagation();
			
			// drag
            $document.bind(dragEvents.drag + "." + id, function(e){
				extra = buildDragExtra(e,$elem,$helper,SDRAGDRAG);
				
                var overElem;
                if (options.draggable === true){
                  overElem = findOverElement($helper,extra);
                  extra.overElement = overElem;
                }				
				
            	$elem.trigger(SDRAGDRAG,[extra]);
            	
            	if (options.draggable === true){
            		moveElement($helper,extra);
            		dropExtra = buildDropExtra($elem,$helper);
					triggerDropEventOnOverElement(SDRAGOVER,e,$elem,overElem,dropExtra);
				}
				
				// since we create "meta events" we consume this one	
                e.preventDefault();
				e.stopPropagation();
            });
            
            // drag end
            $document.bind(dragEvents.end + "." + id, function(e){
                var extra = buildDragExtra(e,$elem,$helper,SDRAGEND);
                var dropExtra; 
                
                var overElem;
                if (options.draggable === true){
                  overElem = findOverElement($helper,extra);
                  extra.overElement = overElem;
                }
                 
            	$elem.trigger(SDRAGEND,[extra]);
				
				// get the $overElem
				if (options.draggable === true){
					moveElement($helper,extra);
					dropExtra = buildDropExtra($elem,$helper);
					triggerDropEventOnOverElement(SDROP,e,$elem,overElem,dropExtra);
					
					if (!$helper.is($elem)){
						$helper.remove();
					}
				}				
				
				// delete the dragContext
				$elem.data("sDragCtx",null);
				
				// unbind the document event
                $(document).unbind(dragEvents.drag + "." + id);
                $(document).unbind(dragEvents.end + "." + id);
				
				// since we create "meta events" we consume this one
                e.preventDefault();
				e.stopPropagation();
            });
        }
        
    }
    
    
    function moveElement($elem,extra){
    	var boxPos = $elem.position();
		$elem.css({
			left:boxPos.left + extra.deltaPageX,
			top:boxPos.top + extra.deltaPageY
		});

    }
    
    /**
     * Trigger the drop event on the overElement
     */
    function triggerDropEventOnOverElement(eventType,event,$elem,overElem,dropExtra){
    	var $overElem = $(overElem);
    	
    	//get the prevOverElem and do the enter/leave
    	var sDragCtx = $elem.data("sDragCtx");
    	var prevOverElem = sDragCtx.overElem;
    	var sdragenterEvent, sdragleaveEvent;
    	// if there are no prevOverElem then, we enter the new one
    	if (typeof prevOverElem === "undefined" ){
    		sdragenterEvent = $.Event(event);
    		sdragenterEvent.target = overElem;
    		sdragenterEvent.type = SDRAGENTER;
    		$overElem.trigger(sdragenterEvent,dropExtra);
    	}
    	// if the new one and old one does not match, then, we need to leave the old elem and enter the new one
    	else if (prevOverElem != overElem){
    		//leave the old one
    		sdragleaveEvent = $.Event(event);
    		sdragleaveEvent.target = prevOverElem;
    		sdragleaveEvent.type = SDRAGLEAVE;
    		$(prevOverElem).trigger(sdragleaveEvent,dropExtra);
    		
    		//enter the new enter event
    		sdragenterEvent = $.Event(event);
    		sdragenterEvent.target = overElem;
    		sdragenterEvent.type = SDRAGENTER;
    		$overElem.trigger(sdragenterEvent,dropExtra);
    		
    	}
    	
    	sDragCtx.overElem = overElem;
		//create the event requested
		var sdragEvent = $.Event(event);
		sdragEvent.target = overElem;
		sdragEvent.type = eventType;
		$overElem.trigger(sdragEvent,dropExtra);    	
    }
    
    function findOverElement($elem,extra){
    	$elem.hide();
		var overElem = document.elementFromPoint(extra.pageX,extra.pageY);
		$elem.show();
		return overElem;
    }
	
	/**
	 * Build the extra event info for the drag event. 
	 */
	function buildDragExtra(event,$elem,$helper,dragType){
		snow.event.fixTouchEvent(event);
		var extra = {
			eventSource: event,
			pageX: event.pageX,
			pageY: event.pageY			
		};
		
		if ($helper){
			extra.helperElement = $helper.get(0);
		}
		
		var oe = event.originalEvent;
		if (hasTouch){
			extra.touches = oe.touches;
		}
		
		var sDragCtx = $elem.data("sDragCtx");
		
		if (dragType === SDRAGSTART){
			sDragCtx.startPageX = extra.startPageX = extra.pageX;
			sDragCtx.startPageY = extra.startPageY = extra.pageY;
			
			sDragCtx.lastPageX = sDragCtx.startPageX = extra.startPageX;
			sDragCtx.lastPageY = sDragCtx.startPageY = extra.startPageY;
		}else if (dragType === SDRAGEND){
			// because, on iOs, the touchEnd event does not have the .touches[0].pageX
			extra.pageX = sDragCtx.lastPageX;
			extra.pageY = sDragCtx.lastPageY;
		}
		
		extra.startPageX = sDragCtx.startPageX;
		extra.startPageY = sDragCtx.startPageY;
		extra.deltaPageX = extra.pageX - sDragCtx.lastPageX;
		extra.deltaPageY = extra.pageY - sDragCtx.lastPageY;
		
		sDragCtx.lastPageX = extra.pageX;
		sDragCtx.lastPageY = extra.pageY;
		return extra;
	}
	
	/**
	 * Build the extra event info for the drop event
	 */
	function buildDropExtra($elem,$helper){
		var extra = {};
		extra.draggableElement = $elem.get(0);
		extra.helperElement = $helper.get(0);
		return extra;
	}
    
    $.fn.sDrag.defaults = {
    	draggable: false,
    	clone: 'original'
    }
})(jQuery);

