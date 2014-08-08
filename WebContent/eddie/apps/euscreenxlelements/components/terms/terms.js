var Terms = function(options){
	console.log("TERMS()");
	Component.apply(this, arguments);
	var self = this;
	
	this.center();
};

Terms.prototype = Object.create(Component.prototype);
Terms.prototype.element = $('#terms');
Terms.prototype.show = function(){
	jQuery('.container.main').hide();
	this.element.addClass('visible');
};
Terms.prototype.hide = function(){
	this.element.removeClass('visible');
};
Terms.prototype.center = function(){
	var contents = this.element.find('.contents');
	contents.css('margin-top', (this.element.height() - contents.height()) / 2);
};
