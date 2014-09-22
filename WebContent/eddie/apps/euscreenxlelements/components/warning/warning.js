var Warning = function(options){
	Component.apply(this, arguments);
	var self = this;
	this.element = jQuery("#warning");
	this.videoWarning = this.element.find('.warning-playout');
	
	if(!this.checkMP4()){
		setTimeout(function(){
			self.videoWarning.show();
		}, 500);
	}else{
		self.videoWarning.hide();
	}
}

Warning.prototype = Object.create(Component.prototype);
Warning.prototype.checkMP4 = function(){
	var canPlay = false;
	var v = document.createElement('video');
	if(v.canPlayType && v.canPlayType('video/mp4') != "") {
		canPlay = true;
	}

	return canPlay;
};