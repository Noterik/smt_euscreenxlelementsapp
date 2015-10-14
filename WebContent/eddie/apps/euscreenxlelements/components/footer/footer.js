var Footer = function(options){
	console.log("Footer()");
	
	this.element = jQuery("#footer");
	
	var transformer = eddie.getComponent("urltransformer");
	if(transformer){
		transformer.run();
	}
};

Footer.prototype = Object.create(Component.prototype);

