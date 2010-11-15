var snow = snow || {};

/**
 * Usage: snow.webStaste(context,name,value)
 *  
 * //Set a webState
 * snow.webState("table_id","sortColumn","age");
 * 
 * //Get the ui state
 * var sortColumn = snow.webState("sortColumn");
 * 
 * @param {Object} stateContext
 * @param {Object} name
 * @param {Object} value (Optional) get if not present
 */
snow.webState = function(stateContext,name,value){
	var cookieName = stateContext + "." + name;
	if (typeof value == 'undefined' ){
		return $.cookie(cookieName);	
	}else{
		$.cookie(cookieName,value);
	}
};


//for backward compatibility (TO DEPRECATE)
jQuery.sWebState = snow.webState;

/**
 * jQuery webState extension. Take the HTMLElement id as the webState context
 * 
 * //set 
 * $("#table_id").sWebState("sortColumn","age");
 * //get
 * $("#table_id").sWebState("sortOrder");
 * 
 */
(function($) {

	/**
	 * Set or get the WebState for id of an Element.
	 *  
	 * Note that for the get, it will return the first match state. 
	 * 
	 * @param {Object} name (required): Name of the state
	 * @param {Object} value (optional) : Value to put in the WebState
	 */
    $.fn.sWebState = function(name, value){
        if (typeof value == 'undefined') {
			var stateContext = this.attr("id");
        	return snow.webState(stateContext, name);
        } 
		else {
            // iterate and process each matched element
            return this.each(function(){
                var $this = $(this);
                var stateContext = $this.attr("id");
                snow.webState(stateContext, name, value);
            });
        }
        
    };


})(jQuery);

