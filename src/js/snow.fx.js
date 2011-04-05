var snow = snow || {};


(function(){

	// ------ snow.fx public API ------ //
	/**
	 * @namespace
	 * 
	 * Still under development development.
	 */
	snow.fx = {
		
		/**
		 * Translate an element for it's current position to a target position. 
		 * For now, only support browsers that support the transform (webkit and mozilla): translate(x,y) css property.<br />
		 * TODO: need to add HTML4 support, with jquery positioning.
		 * @param {HTML|jQuery} opts.element the element
		 * @param {Number} opts.x
		 * @param {Number} opts.y
		 */
		translate: function(opts){
			var $e = $(opts.element);
			
			/*
			$e.bind("webkitTransitionEnd",function(){
				snow.log.info("transition finish " + $e.position().left);
			});
			*/
			
			var sb = ["translate("];
			sb.push(opts.x); sb.push("px,"); sb.push(opts.y); sb.push("px)"); 
			
			$e.css("transform",sb.join(""));
		},
		
		/**
		 * Scale the element
		 * @param {HTML|jQuery} opts.element the element
		 * @param {Number} opts.sx
		 * @param {Number} opts.sy
		 */
		scale: function(opts){
			var $e = $(opts.element);
			
			if (opts.sx && opts.sy){
				$e.css("transform","scale(" + opts.sx + "," + opts.sy + ")");
			}
			
		}
	}
	// ------ /snow.fx public API ------ //	
	
})();
