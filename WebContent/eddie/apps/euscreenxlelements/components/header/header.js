var Header = function(options){
	var self = this;
	
	Component.apply(this);
	
	this.element = jQuery("#header");
	this.$navElement = this.element.find('#navpanel');
    this.$navbarElement = this.element.find('.navbar-header');
    this.$formElement = this.element.find('#headerform');
	this.searchButton = this.element.find('#searchbutton');
	this.searchForm = this.element.find('form');
	this.menuButton = jQuery("#menubutton");
	
	if(jQuery('#searchinput')[0]){
		this.searchButton.remove();
		this.searchForm.hide();
	}
	
	this.searchForm.on('submit', function(event){
		event.preventDefault();
		var searchKey = jQuery(this).find('input').val();
		window.location = "/search.html?query=" + encodeURIComponent(searchKey);
	});
	    
	this.searchButton.on('click', function(){
		var mobileSearchInput = jQuery('#mobilesearchinput');
		
		if(mobileSearchInput[0]){
			mobileSearchInput.find('input').focus();
		}else{
			if(self.searchButton.hasClass("active")) {
				self.$formElement.addClass('hidden-xs');
	        	self.$formElement.addClass('hidden-sm');
	        	self.$formElement.css('visibility', 'hidden');
	            self.searchButton.removeClass("active"); // toggle style
	            self.$navbarElement.removeClass('searchOpened');
	            self.menuButton.show();
	        } else {
	        	self.$formElement.removeClass('hidden-xs');
	        	self.$formElement.removeClass('hidden-sm');
	        	self.$formElement.css('visibility', 'visible');
	            self.searchButton.addClass("active"); // toggle style
	            self.$navbarElement.addClass('searchOpened');
	            self.$formElement.find('input[type="text"]').focus();
	            self.menuButton.hide();
	        }
		}
		
	});
};
Header.prototype = Object.create(Component.prototype);