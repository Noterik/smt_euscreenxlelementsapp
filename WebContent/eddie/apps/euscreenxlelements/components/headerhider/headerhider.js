var Headerhider = function(options){	
	Component.apply(this, arguments);
	setTimeout(function(){
		console.log("-------------------CREATE HEADROOM-------------------");
		var element = jQuery('.navbar')[0];
		console.log(Headroom);
		var headroom  = new Headroom(element);
		// initialise
		headroom.init(); 
		console.log("-------------------/END CREATE HEADROOM-------------------");
	}, 250);
	
};
Headerhider.prototype = Object.create(Component.prototype);