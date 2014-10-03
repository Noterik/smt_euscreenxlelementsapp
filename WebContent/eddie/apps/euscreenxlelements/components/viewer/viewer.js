var Viewer = function(options){
	console.log("Viewer()");
	Component.apply(this, arguments);
	
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
	
	var html = template({video: video});
	
	if(this.element.find('video')[0]){
		delete(this.element.find('video')[0]);
		this.element.find('video').remove();
	}
	this.element.find('.media-player').remove();
	this.element.append(html);
	self.loading(true);
	
	var video = this.element.find('video');
	video.parent().hide();
	video[0].load();
	video[0].addEventListener("canplaythrough", function(){
		console.log("CAN PLAY THROUGH!!!!");
		self.loading(false);
		video.parent().show();
	})
};
Viewer.prototype.setAudio = function(data){
	var template = _.template(this.element.find('.audio-template').text());
	var audio = JSON.parse(data);
	
	this.element.html(template({audio: audio}));
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
		var height = jQuery("#viewer").height();
		if(height > 100)
			self.element.find(".media-player iframe").height(height);
	}, 250);
	
};