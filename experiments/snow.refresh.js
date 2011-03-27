/*
 * jQuery snow Refresh.
 * Load and inject a partial html/javascript fragment based on some comments delimiter.
 *
 * The selector must be one or elements. Note that only elements will div id will be process.
 *
 * The HTML comment deliminators for each divId is <!-- #divId --> ... <!-- /#divId -->
 *
 * @param options (optional)
 *    - href (optional): the url to refresh from.
 *    - content (optional): content to process. In this case, href will be ignore, and not AJAX Get will be process.
 *    
 * @version: 0.1 (since 03-OCT-2009)
 * @requires jQuery v1.3 or later 
 *
 */
(function($){

    // plugin definition
    $.fn.sRefresh = function(options){
        var opts = $.extend({}, $.fn.sRefresh.defaults, options);
        
        
        if (!opts.href) {
            opts.href = window.location.href;
        }

        //if the context is the content, then, just extract the section
        if (!opts.content) {
            //load the content only once.
            $.ajax({
                type: "GET",
                url: opts.href,
                async: false,
                dataType: "html",
                data: "random=" + new Date().getTime(),
                success: function(data){
                    opts.content = data;

                }
            });
        }
        
        return this.each(function(){
        
            var $this = $(this);
            
			//only perform the replace for Div that have an div Id

			var divId = $this.get(0).id;
			if (divId) {
				//extract the section
				var sectionName = "#" + divId;
				var sectionHtml = extractContent(opts.content, sectionName);
				
				//Note: the bug about html() not working on TR has been solved on jQuery 1.4
				$this.html(sectionHtml);
				
			}
        });
    }
    
    function extractContent(data, section){
        // we do not do the regEx anymore, it chokes when the data is big (at least on Firefox)
        //var re = new RegExp("<!-- *" + section + "(.|\\r|\\n)*<!-- */" + section + " *-->");
        //var result = re.exec(data);
        //if (result != null) {
        //    return result[0];
        //} else {
        //    return null;
        //}
		
		
		if (data) {
			var startStr = "<!-- " + section + " -->";
			var endStr = "<!-- /" + section + " -->";
			var startIdx = data.indexOf(startStr);
			var endIdx = data.indexOf(endStr);
			if (startIdx != -1 && endIdx != -1) {
				var r = data.substring(startIdx, endIdx + endStr.length);
				return r;
			} else {
				return null;
			}
		}else{
			return null;
		}
    }
    
    // plugin defaults (place holder for now)
    $.fn.sRefresh.defaults = {};
})(jQuery);
