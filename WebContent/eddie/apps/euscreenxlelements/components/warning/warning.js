var Warning = function(options){
	console.log("Warning()");
	Component.apply(this, arguments);
	var self = this;
	this.element = jQuery("#warning");
	this.videoWarning = this.element.find('.warning-playout');
	
	if(!this.checkMP4()){
		console.log("CANNOT PLAY MP4");
		setTimeout(function(){
			self.videoWarning.show();
		}, 500);
	}else{
		self.videoWarning.hide();
	}
}

Warning.prototype = Object.create(Component.prototype);
Warning.prototype.checkMP4 = function(){
	console.log("checkMP4()");
	var canPlay = false;
	var v = document.createElement('video');
	if(v.canPlayType && v.canPlayType('video/mp4') != "") {
		canPlay = true;
	}

	return canPlay;
};