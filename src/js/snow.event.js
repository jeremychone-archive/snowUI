(function($) {

  /**
   * This event either bind a touchend if available, otherwise, bind a click.
   * In future iterations, we might want make the "touch" case a little bit more robust (checking touchstart/touchend are from the same element and no drag was initiated)
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