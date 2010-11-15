/*
 * jQuery snowRte Text Field.
 * 
 * Make a textarea html editable.
 * 
 * $("#myRichTextarea").sRte();
 * 
 * from: jeremychone (www.jeremychone.com)
 * version: 0.1 (since 10-JUNE-2009)
 * @requires jQuery v1.3 or later
 * Deeply inspired from Lightweight RTE - jQuery Plugin, version 1.2 (Andrey Gayvoronsky - http://code.google.com/p/lwrte/)
 */
(function($){
    
	

	/**
	 * Make a textarea html editable.
	 * 
	 * $("#myRichTextarea").sRte();
	 * 
	 * Note: if you do a "detroy" you need to delay the recreation: 
	 * 	setTimeout(function(){
     *   $("#textareaIpt").sRte();
	 *	},1);
	 *
	 * @param {Object} arg1
	 * 			noarg : it will activate the sRte
	 * 			JSON object: will override $.fn.sRte.default
	 * 			"remove":  to remove the sRte
	 */
    $.fn.sRte = function(arg1){
		
		if (arguments.length > 0 && !$.isPlainObject(arg1)) {
			if (arg1 === "destroy") {
				
				return this.each(function(){
					var $textarea = $(this);
					var $next = $textarea.next();
					if ($next.hasClass("sRteCtn")){
						$next.remove();
						
					}
				});
			}
		} else {

			
			// build main options before element iteration
			var opts = $.extend({}, $.fn.sRte.defaults, arg1);
			
			return this.each(function(){
				var $textarea = $(this);
				
				//build the tool bar
				var $sRteCtn;
				if (!$textarea.next().hasClass("sRteCtn")) {
					
					$textarea.after("<div class='sRteCtn' ></div>");
					$sRteCtn = $textarea.next();
					//$sRteCtn.append("<div class='sRteTb'></div>");
					//var $toolbar = $sRteCtn.find(".sRteTb");
					//build the iframe
					$sRteCtn.append("<iframe></iframe>");
				} else {
					
					$sRteCtn = $textarea.next();
				}
				var $iframe = $sRteCtn.find("iframe");
				
				var iframe = $iframe.get(0);
				
				var iframeDoc = iframe.contentWindow.document;
				
				iframeDoc.designMode = 'on';
				iframe.frameBorder = 0;
				iframe.frameMargin = 0;
				iframe.framePadding = 0;
				iframe.height = opts.style.height;
				iframe.width = '100%';
				$iframe.addClass("sRteIframe");
				iframe.src = "javascript:void(0);";
				
				var doc = "<html><head></head><body style='margin:0;padding:0 3px 0 3px'>" + $textarea.text() + "</body></html>";
				iframeDoc.open();
				iframeDoc.write(doc);
				iframeDoc.close();
				$textarea.hide();
				
				//turn off the mozilla css styling
				/*
				 if (!$.browser.msie) {
				 iframeDoc.execCommand('styleWithCSS', false, false);
				 }
				 */
				//Note 1: The onblur event works only on Firefox. So, for now, do it on each keypress.
				//Note 2: We need to bind keydown as well to trap the keys that are not characteres. 
				//        There is no perf issues since the update is 100ms, so, since the keypress will happen just after 
				//        the keydown, they will trigger only one update.   
				
				var updateScheduled = false;
				$(iframeDoc).bind("keypress keydown",function(event){

					if (!updateScheduled) {
					
						setTimeout(function(){
							var value = $(iframeDoc).find("body").html();
							$textarea.attr("value", value);
							updateScheduled = false;
						}, 100);
						updateScheduled = true;
					} else {

					}
					

				});
				
				//on paste, clean the text.
				$(iframeDoc).bind('paste', function(e){
					setTimeout(function(){
						var $body = $(iframeDoc).find("body");
						var dirtyHtml = $body.html();
						var cleanHtml = cleanWordStuff(dirtyHtml);
						$body.html(cleanHtml);
					}, 100);
					
				});
				
			//build and bind the toolbar
			//buildAndBindToolbar($toolbar,opts.tb,iframe);
			
			});
		}
    	
    }
    
    function buildAndBindToolbar($toolbar,tb,iframe){
    	var iframeDoc = iframe.contentWindow.document;
    	
    	for (var i = 0, m = tb.length; i < m ;i++){
    		var action = tb[i];
    		$toolbar.append("<span class='but'></span>");
    		var $but = $toolbar.find("span:last");
			
			if (action.name != undefined){
				$but.addClass(action.name);
			}
			if (action.text != undefined){
				$but.html(action.text);
			}
			
			
    		$but.data("action",action);
			
    		$but.click(function(){
				var action = $(this).data("action");

				
    			iframe.contentWindow.focus();
    			try {
					if (action.cmd){

    					iframeDoc.execCommand(action.cmd, false, action.args);
					}else if (action.tag) {

						var range = getSelectedRange(iframe);
								   	 
		 			    var wrapElem = iframe.contentWindow.document.createElement(action.tag);
			  			range.surroundContents(wrapElem);
						
						var $wrapElem = $(wrapElem);
						if (action.cssClass){
							$wrapElem.attr("class",action.cssClass);
						}
						if (action.cssStyle){
							$wrapElem.attr("style",action.cssStyle);
						}


					}else {
						action.exec(iframe);
					}
    			} catch(e) {
    				alert("Cannot exec cmd: " + e);
    			}
    			iframe.contentWindow.focus();
    		});
    	}
    }
	
    function getSelectedNode(iframe){
        var range = getSelectedRange(iframe);
		if (range != null){
			return getParentElement(range);
		}else{
			return false;
		}

    }
	
	function getSelectedRange(iframe){
        var node, selection, range;
        var iframe_win = iframe.contentWindow;
        
		
        if (iframe_win.getSelection) {
            try {
                selection = iframe_win.getSelection();
                range = selection.getRangeAt(0);

				
            } 
            catch (e) {
                return null;
            }
        }
        else {
            try {
                selection = iframe_win.document.selection;
                range = selection.createRange();
				

            } 
            catch (e) {
                return null;
            }
        }
		
		return range;
        		
	}
    
	// plugin defaults
    $.fn.sRte.defaults = {
      debug: false,
	  style:{width:'400px',height:'200px'},
	  tb:[{name:'bold',
	  	   text:'B',	       
		   cmd:'bold',
		   args: []
		  },
		  {name:'custom',
		   text:'Custom',
		   tag: 'span',
		   cssClass: 'cust',
		   cssStyle: 'color:blue'
		  },
		  {name:'testExec',
		   text:'Test Exec',
		   exec:function(iframe){
							   	  test = getSelectedNode(iframe);
								  testRange = getSelectedRange(iframe);
								  testIframe = iframe;
								  var wrapElem = iframe.contentWindow.document.createElement("i");
								  testRange.surroundContents(wrapElem);
								  $(wrapElem).css("color","red");
								  
							   }
		  }		  
		  ]
    };
	
    function getParentElement(range){
        if (range.commonAncestorContainer) {
            return range.commonAncestorContainer;
        }
        else {
            return range.parentElement();
        }
    }
	
	function cleanWordStuff(s){

		var bIgnoreFont = true;
		var bRemoveStyles = true; 
		var bCleanWordKeepsStructure = true;
		
		
		s = s.replace(/<o:p>\s*<\/o:p>/g, '') ;
		s = s.replace(/<o:p>[\s\S]*?<\/o:p>/g, '&nbsp;') ;

		// Remove mso-xxx styles.
		s = s.replace( /\s*mso-[^:]+:[^;"]+;?/gi, '' ) ;

		// Remove margin styles.
		s = s.replace( /\s*MARGIN: 0cm 0cm 0pt\s*;/gi, '' ) ;
		s = s.replace( /\s*MARGIN: 0cm 0cm 0pt\s*"/gi, "\"" ) ;

		s = s.replace( /\s*TEXT-INDENT: 0cm\s*;/gi, '' ) ;
		s = s.replace( /\s*TEXT-INDENT: 0cm\s*"/gi, "\"" ) ;

		s = s.replace( /\s*TEXT-ALIGN: [^\s;]+;?"/gi, "\"" ) ;

		s = s.replace( /\s*PAGE-BREAK-BEFORE: [^\s;]+;?"/gi, "\"" ) ;

		s = s.replace( /\s*FONT-VARIANT: [^\s;]+;?"/gi, "\"" ) ;

		s = s.replace( /\s*tab-stops:[^;"]*;?/gi, '' ) ;
		s = s.replace( /\s*tab-stops:[^"]*/gi, '' ) ;

		// Remove FONT face attributes.
		if (bIgnoreFont) {
			s = s.replace( /\s*face="[^"]*"/gi, '' ) ;
			s = s.replace( /\s*face=[^ >]*/gi, '' ) ;

			s = s.replace( /\s*FONT-FAMILY:[^;"]*;?/gi, '' ) ;
		}

		// Remove Class attributes
		s = s.replace(/<(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "<$1$3") ;

		// Remove styles.
		if (bRemoveStyles)
			s = s.replace( /<(\w[^>]*) style="([^\"]*)"([^>]*)/gi, "<$1$3" ) ;

		// Remove style, meta and link tags
		s = s.replace( /<STYLE[^>]*>[\s\S]*?<\/STYLE[^>]*>/gi, '' ) ;
		s = s.replace( /<(?:META|LINK)[^>]*>\s*/gi, '' ) ;

		// Remove empty styles.
		s =  s.replace( /\s*style="\s*"/gi, '' ) ;

		s = s.replace( /<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '&nbsp;' ) ;

		s = s.replace( /<SPAN\s*[^>]*><\/SPAN>/gi, '' ) ;

		// Remove Lang attributes
		s = s.replace(/<(\w[^>]*) lang=([^ |>]*)([^>]*)/gi, "<$1$3") ;

		s = s.replace( /<SPAN\s*>([\s\S]*?)<\/SPAN>/gi, '$1' ) ;

		s = s.replace( /<FONT\s*>([\s\S]*?)<\/FONT>/gi, '$1' ) ;

		// Remove XML elements and declarations
		s = s.replace(/<\\?\?xml[^>]*>/gi, '' ) ;

		// Remove w: tags with contents.
		s = s.replace( /<w:[^>]*>[\s\S]*?<\/w:[^>]*>/gi, '' ) ;

		// Remove Tags with XML namespace declarations: <o:p><\/o:p>
		s = s.replace(/<\/?\w+:[^>]*>/gi, '' ) ;

		// Remove comments [SF BUG-1481861].
		s = s.replace(/<\!--[\s\S]*?-->/g, '' ) ;

		s = s.replace( /<(U|I|STRIKE)>&nbsp;<\/\1>/g, '&nbsp;' ) ;

		s = s.replace( /<H\d>\s*<\/H\d>/gi, '' ) ;

		// Remove "display:none" tags.
		s = s.replace( /<(\w+)[^>]*\sstyle="[^"]*DISPLAY\s?:\s?none[\s\S]*?<\/\1>/ig, '' ) ;

		// Remove language tags
		s = s.replace( /<(\w[^>]*) language=([^ |>]*)([^>]*)/gi, "<$1$3") ;

		// Remove onmouseover and onmouseout events (from MS Word comments effect)
		s = s.replace( /<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi, "<$1$3") ;
		s = s.replace( /<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi, "<$1$3") ;

		if (bCleanWordKeepsStructure) {
			// The original <Hn> tag send from Word is something like this: <Hn style="margin-top:0px;margin-bottom:0px">
			s = s.replace( /<H(\d)([^>]*)>/gi, '<h$1>' ) ;

			// Word likes to insert extra <font> tags, when using MSIE. (Wierd).
			s = s.replace( /<(H\d)><FONT[^>]*>([\s\S]*?)<\/FONT><\/\1>/gi, '<$1>$2<\/$1>' );
			s = s.replace( /<(H\d)><EM>([\s\S]*?)<\/EM><\/\1>/gi, '<$1>$2<\/$1>' );
		} else {
			s = s.replace( /<H1([^>]*)>/gi, '<div$1><b><font size="6">' ) ;
			s = s.replace( /<H2([^>]*)>/gi, '<div$1><b><font size="5">' ) ;
			s = s.replace( /<H3([^>]*)>/gi, '<div$1><b><font size="4">' ) ;
			s = s.replace( /<H4([^>]*)>/gi, '<div$1><b><font size="3">' ) ;
			s = s.replace( /<H5([^>]*)>/gi, '<div$1><b><font size="2">' ) ;
			s = s.replace( /<H6([^>]*)>/gi, '<div$1><b><font size="1">' ) ;

			s = s.replace( /<\/H\d>/gi, '<\/font><\/b><\/div>' ) ;

			// Transform <P> to <DIV>
			var re = new RegExp( '(<P)([^>]*>[\\s\\S]*?)(<\/P>)', 'gi' ) ;	// Different because of a IE 5.0 error
			s = s.replace( re, '<div$2<\/div>' ) ;

			// Remove empty tags (three times, just to be sure).
			// This also removes any empty anchor
			s = s.replace( /<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, '' ) ;
			s = s.replace( /<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, '' ) ;
			s = s.replace( /<([^\s>]+)(\s[^>]*)?>\s*<\/\1>/g, '' ) ;
		}

		return s;
	}
    
})(jQuery);

