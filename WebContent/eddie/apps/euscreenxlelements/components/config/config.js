var Config = function(options){
	var settings = {};
	var loaded = false;
	
	this.update = function(message){
		console.log("UPDATE( " , message , ")");
		settings = JSON.parse(message);
		console.log("SETTINGS", settings);
		$(this).trigger('config-loaded');
	}
	
	this.getSetting = function(name){
		return settings[name];
	}
	
	this.getSettings = function(){
		return settings;
	}
	
	this.isLoaded = function(){
		return loaded;
	}
};
Config.prototype = Object.create(Component.prototype);