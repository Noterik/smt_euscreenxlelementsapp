var Ads = function(options){
	var element = jQuery("#ads");
	
	var number = Math.floor(Math.random() * 2) + 1;
		
	element.find('.ads').append(element.find('#ad_template_' + number).text());
};
Ads.prototype = Object.create(Component.prototype);