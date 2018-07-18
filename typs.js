/**
 * TYPS.js
 */
(function(global){
	function reparse(obj, json){
		for (var key in json) {
			if (!!obj.__types__ && !!obj.__types__[key]) {
				obj[key] = reparse(new obj.__types__[key], json[key]);
			} else {
				obj[key] = json[key];
			} 
		} 
		return obj;
	}
	global.TYPS = {
		parse: function(json, rootType) {
			if(typeof(json) == "string"){
				json = JSON.parse(json);
			}
			if(!rootType) return json;
			return reparse(new rootType, json);
		},
		stringify: function(...args){
			return JSON.stringify(...args);
		}
	}
})(typeof window != "undefined" ? window : global);