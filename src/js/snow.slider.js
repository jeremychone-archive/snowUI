(function($) {

  /**
   * SnowUI jquery extention for slider
   * 
   * $("#mySlider.sSlider").sSlider(); // the slider HTMLElement must have class='sSlider'
   * 
   * 
   * Arguments:
   * 	options: not supported yet
   * 
   * Events: 
   *  
   */
  $.fn.sSlider = function(arg1,arg2) {
	  
	  var options = null;	
	  
	  //TODO: should probably look at arg2 only
	  if (arg1 && $.isPlainObject(arg1)){
	    options =   arg1;
	  }
	  
	  
	  
      // extends options with the default one
      var opts = $.extend({}, $.fn.sSlider.defaults, options);


	  	
      // iterate and process each matched element
      return this.each(function() {
          var $sSlider = $(this); // jQuery object for this element
		
		  //if we have a opts.change, register the event
		  if (opts.change){
		  	$sAccordion.bind("sAccordionChange",opts.change);
		  }
		  // ------ Initialization ------ //	
		  //If we are in Flex mode, we do some flex work. 	
		  if ($sAccordion.hasClass("flex")){
			
			flexResize($sAccordion);
			
			//reflex when window resize
			$(window).resize(function(){
				$sAccordion.removeClass("enableAnimation");
				flexResize($sAccordion);
				setTimeout(function(){
					$sAccordion.addClass("enableAnimation");	
				},0);	
			});
			
			//enable the animation only after the intialization (to make sure it is not enabled at init time)
			setTimeout(function(){
				$sAccordion.addClass("enableAnimation");	
			},0);
			
		  }
		  // ------ Initialization ------ //
		  
		  // ------ Events ------ //
		  //attaching the event
		  $sAccordion.delegate(".sAccordionPanel","click",function(){
		  	var eventData = {};
			
		  	var $newPanel = $(this).closest(".sAccordionPanel");
			eventData.newPanel = $newPanel.get(0);
			eventData.newIndex = $newPanel.prevAll(".sAccordionPanel").length;
			
			
			var $oldPanel = $sAccordion.find(".sAccordionPanel.sel");
			eventData.oldPanel = $oldPanel.get(0);
			eventData.oldIndex = $oldPanel.prevAll(".sAccordionPanel").length ;
			

			//with CSS transition, if transition, then, swap/change only at the end of the event	
			if (snow.ua.hasTransition()){
				 
				console.log("do css transition");
				var transitionCssBefore = {
					display: "block",
					overflow: "hidden"
				};
				
				var transitionCssAfter = {
					display: null,
					overflow: null
				};
				
				//make sure the old panel stay visible during the transition
				var $oldPanelContent = $oldPanel.find(".sAccordionPanelContent");
				$oldPanelContent.css(transitionCssBefore);
				//put the new panel visible as well, otherwise animation won't occure
				var $newPanelContent = $newPanel.find(".sAccordionPanelContent");
				$newPanelContent.css(transitionCssBefore);
				
				//trigger the animation
				setTimeout(function(){
					if ($sAccordion.hasClass("flex")) {
						flexResize($sAccordion,$newPanel);
					}
					$oldPanel.removeClass("sel");
					$newPanel.addClass("sel");
					$sAccordion.trigger("sAccordionChange",eventData);
					
					$oldPanel.bind("webkitTransitionEnd",function(){
						//remove the styles
						$oldPanelContent.css(transitionCssAfter);
						$newPanelContent.css(transitionCssAfter);
					});
					
				},1); 
				
			}
			//without transition
			else{
				if ($sAccordion.hasClass("flex")) {
					flexResize($sAccordion,$newPanel);
				}
				$oldPanel.removeClass("sel");
				$newPanel.addClass("sel");
				$sAccordion.trigger("sAccordionChange",eventData);
			}
			
			
		  });
		  // ------ /Events ------ //
      }); 

   }; 

  function flexResize($sAccordion,$selPanel){
  	if (!$selPanel){
		$selPanel = $sAccordion.find(".sAccordionPanel.sel");
	}
	//close all the .sAccordionPanelContent	
	$sAccordion.find(".sAccordionPanelContent").each(function(){
		var $panel = $(this);
		$panel.css("height","0px");
	});	
	
	//compute the total headersHeight
  	var headersHeight = 0; 
	$sAccordion.find(".sAccordionPanelHeader").each(function(){
		headersHeight = headersHeight + $(this).outerHeight();
	});


	//compute the panelContenthHeight.
	var panelContentH = $sAccordion.innerHeight()  - headersHeight;

	$selPanel.find(".sAccordionPanelContent").css("height",panelContentH + "px"); 
  }
  
  // sDialog default options
  $.fn.sSlider.defaults = {
  };
  

})(jQuery);