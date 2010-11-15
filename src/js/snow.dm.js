var snow = snow || {};

snow.dm = (function(){
	
	function DM(){};
	
	var daoDic = {};
	
	//changeEventListenersby objectType
	var daoChangeEventListeners = {};
	
	//public
	DM.prototype.registerDao = function(objectType,dao){
		daoDic[objectType] = dao;
	}; 
	
	// Add a change listener function for an objectType
	// Will Change listener will get called on save and remove
	// TODO: needs to support "all" (i.e. jsut the listener, which means get triggered on every objectType)
	DM.prototype.addChangeListener = function(objectType,listener){
		var listeners = daoChangeEventListeners[objectType] || [];
		daoChangeEventListeners[objectType] = listeners; //the js way
		listeners.push(listener);
	};
	
	DM.prototype.getDao = function(objectType){
		return daoDic[objectType];
	};
	
	// ------- DAO Delegator ------ //
	DM.prototype.get = function(objectType,id){
		var dao = this.getDao(objectType);
		if (dao){
			return dao.get(objectType,id);		
		}else{
			snow.logger.error("cannot find the DAO for objectType" + objectType);
		}	
	};	
	
	/**
	 * 
	 * @param {Object} objectType
	 * @param {Object} opts (not supported yet)
	 *           opts.pageIndex {Number} Index of the page, starting at 0.
	 *           opts.pageSize  {Number} Size of the page
	 *           opts.like      {Object}
	 *           opts.orderBy   {String}
	 *           opts.orderType {String} "asc" or "desc"
	 */
	DM.prototype.find = function(objectType,opts){
		var dao = this.getDao(objectType);
		if (dao){
			//TODO need to support variable params
			return dao.find(objectType,opts);	
		}else{
			snow.logger.error("cannot find the DAO for objectType" + objectType);
		}	
	};	
	
	DM.prototype.save = function(objectType,id,data){
		var dao = this.getDao(objectType);
		if (dao && dao.save){
			var newData = dao.save(objectType,id,data);
			//TODO: need add support for the oldData
			callChangeListeners(objectType,"save",null,newData,data);
			return newData;
		}else{
			snow.logger.error("cannot find the DAO or save method for objectType" + objectType);
		}	
	};
	
	
	DM.prototype.remove = function(objectType,id){
		var dao = this.getDao(objectType);
		if (dao){
			var r = dao.remove(objectType,id);
			
			callChangeListeners(objectType,"remove",dao.get(objectType,id),null,null);
			
			return r;
		}else{
			snow.logger.error("cannot find the DAO for objectType" + objectType);
		}	
	};
	
	// ------- /DAO Delegator ------ //
	
	/**
	 * Private method to trigger the change(daoEvent) on all listeners.
	 * NOTE: this param names maps to what is daoChangeEvent
	 * 
	 * @param {Object} objectType
	 * @param {Object} action ("remove" or "save")
	 * @param {Object} oldData The data prior to the change (not supported today for save)
	 * @param {Object} newData The data after the change (null if remove)
	 * @param {Object} saveData The data object that was passed to dm.save
	 */
	function callChangeListeners(objectType,action,oldData,newData,saveData){
		var listeners = daoChangeEventListeners[objectType],
			listener;
		
		var daoChangeEvent = {objectType: objectType,
					    action: action,
						oldData: oldData,
						newData: newData,
						saveData: saveData};
			
		if (listeners){
			for (var i = 0; i < listeners.length; i++ ){
				listeners[i](daoChangeEvent);	
			}
		}
	};
	
	return new DM();
	
})();
		

// ------ jQuery DAO Helper ------ //
(function($) {

  /**
   * get the dataObjectId from an element or its ancestors for a given objectType
   * @param {prefix} prefix
   */
  $.fn.sDataObjectId = function(objectType) {
	  var objId
	  
      // iterate and process each matched element
      this.each(function() {
	  	var $this = $(this);
		var $objElement = $this.closest("[data-obj_type='" + objectType + "']" );
		objId = $objElement.attr("data-obj.id");
      });
	  
	  return objId; 

   }; 


})(jQuery);

(function($) {

  /**
   * get the dataObject from an element or its ancestors for a given objectType
   * @param {prefix} prefix
   */
  $.fn.sDataObject = function(objectType) {
	  var obj = null;
      // iterate and process each matched element
      this.each(function() {
	  	var $this = $(this);
		var objId = $this.sDataObjectId(objectType);
		obj =  snow.dm.get(objectType,objId);
      }); 
	 return obj;
   }; 


})(jQuery);
// ------ /jQuery DAO Helper ------ //