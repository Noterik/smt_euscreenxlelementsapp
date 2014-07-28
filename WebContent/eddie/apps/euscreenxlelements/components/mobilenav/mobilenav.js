var Mobilenav = function(options){
	var self = this;
	Component.apply(this, arguments);
	
	this.element = jQuery('#mobilenav');
			
	setTimeout(function(){
		self.element.slidePanelJS({
	        openButton: '#menubutton',
	        pageSection:'#page',
	        navbarSection:'#navbar',
	        speed:200
	    });
	    
	}, 100);
};

Mobilenav.prototype = Object.create(Component.prototype);