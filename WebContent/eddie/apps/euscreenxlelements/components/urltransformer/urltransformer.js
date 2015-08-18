var Urltransformer = function(){
	var self = this;
	var config = eddie.getComponent('config');
	
	if(config.isLoaded()){
		this.run();
	}else{
		$(config).on('config-loaded', function(){
			console.log(config);
			self.run();
		});
	}
	
	this.getURL = function(location, params){
		var url = config.getSetting("location-" + location);
		if(url){
			if(url.indexOf("?") > -1 ){
				url += "&" + $.param(params);
			}else if(params && Object.keys(params).length > 0){
				url += "?" + $.param(params);
			}
		}
		return url;
	}
	
	this.run = function(){
		jQuery('[data-url]').each(function(){
			var $this = $(this);
			var urlTo = $this.attr("data-url");
			var actualUrl = config.getSetting("location-" + urlTo);
			
			var params = this.attributes;
			console.log(params);
			var urlParams = {};
			for(paramKey in params){
				var param = params[paramKey];
				var paramName = param.nodeName;
				console.log("PARAMNAME: " , paramName);
				if(paramName && paramName.indexOf("data-params-") > -1){
					var urlName = paramName.replace("data-params-" , "");
					urlParams[urlName] = param.nodeValue;
				}
			}
			
			if(actualUrl){
				if(actualUrl.indexOf("?") > -1){
					actualUrl += "&" + $.param(urlParams);
				}else if(Object.keys(urlParams).length > 0){
					actualUrl += "?" + $.param(urlParams);
				}
				if(actualUrl){
					$this.attr("href", actualUrl);
				}
			}
		});
	}
	
};
Urltransformer.prototype = Object.create(Component.prototype);