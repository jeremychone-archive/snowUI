var snow = snow || {};

(function(){
	
	snow.dm = {};
	
	var daoDic = {};
	
	//changeEventListenersby objectType
	var daoChangeEventListeners = {};
	
	function getDao(objectType){
		var dao = daoDic[objectType];
		if (dao){
			return dao;
		}else{
			var er = "Cannot find the DAO for objectType: " + objectType;
			snow.log.error(er);
			throw er;
		}
	};	
	
	//public
	snow.dm.registerDao = function(objectType,dao){
		daoDic[objectType] = dao;
		return this;
	}; 
	
	// Add a change listener function for an objectType
	// Will Change listener will get called on save and remove
	// TODO: needs to support "all" (i.e. jsut the listener, which means get triggered on every objectType)
	snow.dm.addChangeListener = function(objectType,listener){
		var listeners = daoChangeEventListeners[objectType];
		if (!listeners){
			listeners = [];
			daoChangeEventListeners[objectType] = listeners;
		}
		daoChangeEventListeners[objectType] = listeners; 
		listeners.push(listener);
		
		return this;
	};
	
	// ------- DAO Delegator ------ //
	/**
	 * Get the id for a data object. This is usefull for the framework to know how to retrieve an id from an object. 
	 * @param {Object} data
	 * @return the id (this is not deferred)
	 * @throws error if dao cannot be found
	 */
	snow.dm.getId = function(objectType, data){
		return getDao(objectType).getId(objectType, data);
	}	
	
	/**
	 * Return a value or deferred object (depending of DAO impl) for this objectType and id.
	 * @param {Object} objectType
	 * @param {Object} id
	 * @return 
	 */
	snow.dm.get = function(objectType,id){
		return getDao(objectType).get(objectType,id);
	};	
	
	/**
	 * Return an array of values or a deferred object (depending of DAO impl) for this objectType and options
	 * @param {Object} objectType
	 * @param {Object} opts (not supported yet)
	 *           opts.pageIndex {Number} Index of the page, starting at 0.
	 *           opts.pageSize  {Number} Size of the page
	 *           opts.like      {Object}
	 *           opts.orderBy   {String}
	 *           opts.orderType {String} "asc" or "desc"
	 */
	snow.dm.find = function(objectType,opts){
		return getDao(objectType).find(objectType,opts);
	};	
	
	snow.dm.save = function(objectType,data){
		var result = getDao(objectType).save(objectType,data);
		
		// if the result is a deferred object, then, wait until done to callChangeListeners 
		if (result && $.isFunction(result.promise)){
			result.done(function(newData){
				callChangeListeners(objectType,"save",null,newData,data);	
			});
		}
		else{
			callChangeListeners(objectType,"save",null,result,data);	
			
		}
		return result;
		
	};
	
	
	snow.dm.remove = function(objectType,id){
		var result = getDao(objectType).remove(objectType,id);
		
		// if the result is a deferred object, then, wait until done to callChangeListeners
		if (result && $.isFunction(result.promise)){
			result.done(function(removedObject){
				callChangeListeners(objectType,"remove",removedObject,null,null);	
			});
		}
		else{
			callChangeListeners(objectType,"remove",result,null,null);	
		}
		
	};
	
	// ------- /DAO Delegator ------ //
	
	// ------- Deferred DAO Delegator ------ //
	// Just a wrapper that wrap the snow.dm result in Deferred object if they are not already. 
	
	snow.ddm = {
		getId: function(objectType, data){
			return snow.dm.getId(objectType,data);
		},
		
		get: function(objectType,id){
			return wrapWithDeferred(snow.dm.get(objectType,id));
		},
	
		find: function(objectType,opts){
			return wrapWithDeferred(snow.dm.find(objectType,opts));
		},
		
		save: function(objectType,data){
			return wrapWithDeferred(snow.dm.save(objectType,data));
		},
		
		remove: function(objectType,id){
			return wrapWithDeferred(snow.dm.remove(objectType,id));
		}
	}
	// ------- /Deferred DAO Delegator ------ //
	
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
	
	/**
	 * Wrap with a deferred object if the obj is not a deferred itself. 
	 */
	function wrapWithDeferred(obj){
		//if it is a deferred, then, trust it, return it. 
		if (obj && $.isFunction(obj.promise)){
			return obj;
		}else{
			var dfd = $.Deferred();
			dfd.resolve(obj);
			return dfd;
		}
	}
	
	
})();

// ------ Simple DAO ------ //
snow.dao = {};

(function(){
	/**
	 * SimpleDao is a Dao for a array based storage. Each data item is stored as an array item, 
	 * and have a unique .id property (that will be added on save is not present).
	 * 
	 * Note that instance of a SimpleDao is only for single object type.
	 * 
	 * @param {Array}  store (optional) Array of json object representing each data item
	 * @param {Object} opts  (optional) Dao options (not supported yet)
	 */
	function SimpleDao(store,opts){
		this._store = store || [];
	}
	// ------ DAO Interface Implementation ------ //
	SimpleDao.prototype.getId = function(objectType,data){
		return data.id;
	}
	
	SimpleDao.prototype.get = function(objectType,id){
		var idx = snow.util.array.getIndex(this._store,"id",id);
		return this._store[idx];
	}
	
	//for nos, just support opts.orderBy
	SimpleDao.prototype.find = function(objectType,opts){
		//TODO: probably need to copy the array to avoid giving the original array
		var resultSet = this._store;
		
		if (opts){
			if (opts.orderBy){
				resultSet = snow.util.array.sortBy(resultSet,opts.orderBy)	
			}
		}
		return resultSet;
	}
	
	SimpleDao.prototype.save = function(objectType,data){
		// if it is an update
		if (data.id){
			var storeData = this.get(objectType,data.id);
			if (storeData) {
				$.extend(storeData, data);
				return storeData;
			}
		}
		
		// if we are here, it means we need to add the data
		
		// if the id has already been created, no biggies, otherwise, create it.
		if (typeof data.id === "undefined"){
			data.id = snow.util.uuid(12);
		}
			
		this._store.push(data);
		
		return data;
	}
	
	SimpleDao.prototype.remove = function(objectType,id){
		var oldData = this.get(objectType,id);
		var idx = snow.util.array.getIndex(this._store,"id",id);
		if (idx > -1) {
			snow.util.array.remove(this._store, idx);
		}
		return oldData;
		
	}	
	// ------ /DAO Interface Implementation ------ //
	
	snow.dao.SimpleDao = SimpleDao;
})();
// ------ /Simple DAO ------ //		

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
   * get the dataObject deferred from an element or its ancestors for a given objectType
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