(function($) {

  /**
   * SnowUI jquery extention for accordion
   * 
   * $("#myAccordion.sAccordion").sAccordion();
   * 
   * $("#myAccordions").sAccordion("delegate",".accordion"); //not implemented yet
   * 
   * Arguments:
   * 	options: not supported yet
   * 
   * Events: 
   *   + sAccordionChange: $("#myAccordion").bind("sAccordionChange",function(event,data)...
   * 	     data.oldIndex {number} index of the previous selected panel
   *         data.oldPanel {HTMLElement} element of the previous panel selected
   *         data.newIndex {number} index of the new selected panel
   *         data.newPanel {HTMLElement} element of the new panel selected
   *  
   */
  $.fn.sAccordion = function(arg1,arg2) {
	  
	  var options = null;	
	  if (arg1 && $.isPlainObject(arg1)){
	    options =   arg1;
	  }
	  
	  
	  
      // extends options with the default one
      var opts = $.extend({}, $.fn.sAccordion.defaults, options);


	  	
      // iterate and process each matched element
      return this.each(function() {
          var $sAccordion = $(this); // jQuery object for this element
		
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
		  $sAccordion.delegate(".sAccordion-panel","click",function(){
		  	var eventData = {};
			
		  	var $newPanel = $(this).closest(".sAccordion-panel");
			eventData.newPanel = $newPanel.get(0);
			eventData.newIndex = $newPanel.prevAll(".sAccordion-panel").length;
			
			
			var $oldPanel = $sAccordion.find(".sAccordion-panel.sel");
			eventData.oldPanel = $oldPanel.get(0);
			eventData.oldIndex = $oldPanel.prevAll(".sAccordion-panel").length ;
			

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
				var $oldPanelContent = $oldPanel.find(".sAccordion-panel-content");
				$oldPanelContent.css(transitionCssBefore);
				//put the new panel visible as well, otherwise animation won't occure
				var $newPanelContent = $newPanel.find(".sAccordion-panel-content");
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
		$selPanel = $sAccordion.find(".sAccordion-panel.sel");
	}
	//close all the .sAccordionPanelContent	
	$sAccordion.find(".sAccordion-panel-content").each(function(){
		var $panel = $(this);
		$panel.css("height","0px");
	});	
	
	//compute the total headersHeight
  	var headersHeight = 0; 
	$sAccordion.find(".sAccordion-panel-header").each(function(){
		headersHeight = headersHeight + $(this).outerHeight();
	});


	//compute the panelContenthHeight.
	var panelContentH = $sAccordion.innerHeight()  - headersHeight;

	$selPanel.find(".sAccordion-panel-content").css("height",panelContentH + "px"); 
  }
  
  // sDialog default options
  $.fn.sAccordion.defaults = {
  };
  

})(jQuery);