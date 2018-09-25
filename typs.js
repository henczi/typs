/**
 * TYPS.js
 */
(function(global){
	function reparse(type, json){
        if (!type) return json;
        var ret, t = Object.prototype.toString.call(json);
        if (t == '[object Array]') {
            ret = [];
            for (var i = 0; i < json.length; i++) {
                ret.push(reparse(type, json[i]));
            }
        } else if(t == '[object Object]'){
            ret = new type;
            for (var key in json) {
                var subType = (type.__types__ && type.__types__[key]) || null;
                ret[key] = reparse(subType, json[key]);
            }
        } else {
            ret = json;
        }
		return ret;
	}
	global.TYPS = {
		parse: function(json, rootType) {
			if(typeof(json) == "string"){
				json = JSON.parse(json);
			}
			return reparse(rootType, json);
		},
		stringify: function(...args){
			return JSON.stringify(...args);
		}
	}
})(typeof window != "undefined" ? window : global);