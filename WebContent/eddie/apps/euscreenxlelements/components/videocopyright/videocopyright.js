var Videocopyright = function(options){
	console.log("Videocopyright()");
	var element = jQuery("#videocopyright");
	element.addClass('videocopyright');
	element.hide();
	jQuery(window).on('contextmenu', function(event){
		if(jQuery(event.target).is('video')){
			event.preventDefault();
			event.target.pause();
			var parent = jQuery(event.target).parent();
			element.width(jQuery(event.target).width());
			element.height(jQuery(event.target).height());
			parent.append(element);
			element.fadeIn("slow");
		}
	});
	
	element.find('.dismiss a').click(function(){
		element.fadeOut("slow").then(function(){
			jQuery('body').append(element);
		});
	});
};
Videocopyright.prototype = Object.create(Component.prototype);