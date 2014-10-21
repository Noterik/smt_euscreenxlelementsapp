var Mobilenav = function(options){
	console.log("Mobilenav()");
	
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
	
	var url = window.location.pathname;
	var filename = url.substring(url.lastIndexOf('/')+1);
	
	if(!filename){
		filename = "/";
	}
		
	var activeLink = this.element.find('a[href$="' + filename +'"]');
	activeLink.parent().addClass("active");
};

Mobilenav.prototype = Object.create(Component.prototype);