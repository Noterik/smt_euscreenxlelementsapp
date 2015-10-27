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
		console.log("LETS TRANFORM THE URLS!");
		jQuery('[data-url]').each(function(){
			console.log("THIS: ", this);
			var $this = $(this);
			var urlTo = $this.attr("data-url");
			console.log("2");
			var actualUrl = config.getSetting("location-" + urlTo);
			console.log("3");
			
			var params = this.attributes;
			var urlParams = {};
			for(paramKey in params){
				var param = params[paramKey];
				//if there is no param
				if(!param) {
					continue;
				}
				var paramName = param.nodeName;
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
				console.log("ACTUAL URL: " + actualUrl);
				if(actualUrl){
					console.log("HI12341323");
					$this.attr("href", actualUrl);
				}
			}
		});
	}
	
};
Urltransformer.prototype = Object.create(Component.prototype);
