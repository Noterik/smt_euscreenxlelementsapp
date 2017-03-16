var Viewer = function(options){
	console.log("Viewer()");
	Component.apply(this, arguments);
	
	this.device = "desktop";
	this.element = jQuery("#viewer");
};

Viewer.prototype = Object.create(Component.prototype);
Viewer.prototype.loading = function(loading){
	if(loading && loading != "false"){
		this.element.find('.loading').show();
	}else{
		this.element.find('.loading').hide();
	}
};
Viewer.prototype.setUri = function(uri){
	this.uri = uri;
	
	this.initializeViewer();
};
Viewer.prototype.setVideo = function(data){
	console.log("Viewer.prototype.setVideo(" + data + ")");
	var template = _.template(this.element.find('.video-template').text());
	var self = this;
	var video = JSON.parse(data);
	
	console.log("VIDEO");
	console.log(video);
	console.log("END VIDEO");
	
	var html = template({video: video});
	
	if(this.element.find('video')[0]){
		delete(this.element.find('video')[0]);
		this.element.find('video').remove();
	}
	this.element.find('.media-player').remove();
	this.element.append(html);
	/*
	self.loading(true);
	
	var video = this.element.find('video');
	console.log(video);
	if(this.device != "desktop"){
		self.loading(false);
		
	}else{
		video[0].load();
		var readyInterval = setInterval(function(){
			console.log(video[0].readyState);
			if(video[0].readyState == 1 || video){
				self.loading(false);
				video.parent().show();
				clearInterval(readyInterval);
			}
		}, 50);
	}
	*/
	
};
Viewer.prototype.setDevice = function(data){
	console.log("Viewer.setDevice(" + data + ")");
	data = JSON.parse(data);
	this.device = data.device;
	console.log(this.device);
}
Viewer.prototype.setAudio = function(data){
	console.log(data);
	var template = _.template(this.element.find('.audio-template').text());
	var audio = JSON.parse(data);
	
	var html = template({audio: audio});
	
	if(this.element.find('audio')[0]){
		delete(this.element.find('audio')[0]);
		this.element.find('audio').remove();
	}
	
	this.element.find('.audio-player-minimal').remove();
	this.element.append(html);
	
	//this.element.html(template({audio: audio}));
};
Viewer.prototype.setPicture = function(data){
	var template = _.template(this.element.find('.picture-template').text());
	var picture = JSON.parse(data);

	this.element.html(template({picture: picture}));
	$('.image-player a').click(function (e) {
        $('#image-modal #image-modal-src').attr('src', $(this).attr('data-img-url'));
        $('#image-modal #image-modal-nav').attr('href', $(this).attr('data-img-url'));
    });
};
Viewer.prototype.setDoc = function(data){
	var template = _.template(this.element.find('.doc-template').text());
	var doc = JSON.parse(data);
		
	this.element.html(template({doc: doc}));
	
	var self = this;
	setTimeout(function(){
		console.log("SET HEIGHT2!!!!");
		var width = self.element.find("iframe").parent().width();
		console.log("WIDTH: " + width);
		if(width > 100)
			self.element.find("iframe").height(width / 4 * 3);
	}, 500);
	
};