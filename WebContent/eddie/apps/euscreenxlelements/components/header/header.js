var Header = function(options){
	var self = this;
	
	Component.apply(this);
	
	this.element = jQuery("#header");
	this.$navElement = this.element.find('#navpanel');
    this.$navbarElement = this.element.find('.navbar-header');
    this.$formElement = this.element.find('#headerform');
	this.searchButton = this.element.find('#searchbutton');
	this.searchIcon = this.element.find(".glyphicon-search");
	this.searchForm = this.element.find('form');
	this.menuButton = jQuery("#menubutton");
	
	if(jQuery('#searchinput')[0]){
		this.searchButton.remove();
		this.searchForm.hide();
	}
	
	this.searchIcon.on('click', function(){
		if(!(searchKey == null || searchKey == "" || searchKey == " ")){
			
			var url = eddie.getComponent("urltransformer").getURL("search", {"query": ASCII8Decoding.encode(searchKey.toLowerCase())});
			console.log("URL: " + url);
			window.location = url;
			window.location = "/search.html?query=" + encodeURIComponent(ASCII8Decoding.encode(searchKey.toLowerCase()));
		}else{
			console.log(eddie.getComponent("urltransformer"));
			var url = eddie.getComponent("urltransformer").getURL("search", {"query": "*"});
			window.location = url;
			window.location = "/search.html";
		}
	});
	
	this.searchForm.find('input').on('blur', function(event){
		var searchKey = self.searchForm.find('input').val();
		if(!(searchKey == null || searchKey == "" || searchKey == " ")){
			event.preventDefault();
			console.log(eddie.getComponent("urltransformer"));
			var url = eddie.getComponent("urltransformer").getURL("search", {"query": ASCII8Decoding.encode(searchKey.toLowerCase())});
			console.log("URL: " + url);
			window.location = url;
		}
	});
	
	this.searchForm.on('submit', function(event){
		event.preventDefault();
		var searchKey = jQuery(this).find('input').val();
		if(!(searchKey == null || searchKey == "" || searchKey == " ")){
			var url = eddie.getComponent("urltransformer").getURL("search", {"query": ASCII8Decoding.encode(searchKey.toLowerCase())});
			window.location = url;
		}else{
			console.log(eddie.getComponent("urltransformer"));
			var url = eddie.getComponent("urltransformer").getURL("search", {"query": "*"});
			window.location = url;
		}
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
Header.prototype.setActivePage = function(activePage){
	jQuery("#header-link-" + activePage).addClass("active");
};