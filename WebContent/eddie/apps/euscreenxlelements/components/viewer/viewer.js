var Viewer = function(options) {
	console.log("Viewer()");
	Component.apply(this, arguments);

	this.device = "desktop";
	this.element = jQuery("#viewer");
};

Viewer.prototype = Object.create(Component.prototype);
Viewer.prototype.loading = function(loading) {
	if (loading && loading != "false") {
		this.element.find('.loading').show();
	} else {
		this.element.find('.loading').hide();
	}
};
Viewer.prototype.setUri = function(uri) {
	this.uri = uri;

	this.initializeViewer();
};

Viewer.prototype.setVideo = function(data) {
	// console.log("Viewer.prototype.setVideo(" + data + ")");
    	

	var template = _.template(this.element.find('.video-template').text());
	var self = this;
	var video = JSON.parse(data);

	var videoid = video.sources[0].src;
	var ticket = "";
	var pos = videoid.indexOf("?");
	if (pos != -1) {
		ticket = videoid.substring(pos + 1);
		videoid = videoid.substring(0, pos);
	}
	var duration = video.sources[0].duration;
	var maggieid = video.sources[0].maggieid;

	var manurl = "https://embd.eu/euscreenxlmanifestservlet/?videoid="
			+ videoid + "&" + ticket + "&duration=" + duration + "&maggieid="
			+ maggieid;

	var user = "";

	var cookie = document.cookie;
	var re = /smt_euscreenxlapp_user=[a-zA-Z0-9]+/;
	var rs;

	if ((rs = re.exec(cookie)) !== null) {
		if (rs.index === re.lastIndex) {
			re.lastIndex++;
		}
		// eg m[0] etc.
	}
	if (rs) {
		var splitedRegexResult = rs[0].split('=');
		user = splitedRegexResult[1];
	}
	
	var hash = "";
	re2 = /smt_euscreenxlapp_hash=[a-zA-Z0-9]+/;
	var rs2;
	
	if ((rs2 = re2.exec(cookie)) !== null) {
		if (rs2.index === re2.lastIndex) {
			re2.lastIndex++;
		}
		// eg m[0] etc.
	}
	if (rs2) {
		var splitedRegexResult2 = rs2[0].split('=');
		hash = splitedRegexResult2[1];
	}

	if (user != "" && hash != "") {
		var html = "<script>new EuropeanaMediaPlayer(document.getElementById(\"viewer\"), {manifest: \""
				+ manurl + "\"}, {editor: \"http://video-editor.eu/user/"
				+ user
				+ "/hash/"
				+ hash
				+ "\", manifest: \""
				+ manurl
				+ "\"});</script>";

	} else {
		var html = "<script>new EuropeanaMediaPlayer(document.getElementById(\"viewer\"), {manifest: \""
				+ manurl + "\"}, {editor: \"http://euscreen.eu/myeuscreen.html\"});</script>";
	}

	if (this.element.find('video')[0]) {
		delete (this.element.find('video')[0]);
		this.element.find('video').remove();
	}
	this.element.find('.eups-player').remove();
	this.element.append(html);
	console.log('html=' + html);
	/*
	 * self.loading(true);
	 * 
	 * var video = this.element.find('video'); console.log(video);
	 * if(this.device != "desktop"){ self.loading(false);
	 * 
	 * }else{ video[0].load(); var readyInterval = setInterval(function(){
	 * console.log(video[0].readyState); if(video[0].readyState == 1 || video){
	 * self.loading(false); video.parent().show(); clearInterval(readyInterval); } },
	 * 50); }
	 */

};

Viewer.prototype.setDevice = function(data) {
	console.log("Viewer.setDevice(" + data + ")");
	data = JSON.parse(data);
	this.device = data.device;
	console.log(this.device);
}
Viewer.prototype.setAudio = function(data) {
	console.log(data);
	var template = _.template(this.element.find('.audio-template').text());
	var audio = JSON.parse(data);

	var html = template({
		audio : audio
	});

	if (this.element.find('audio')[0]) {
		delete (this.element.find('audio')[0]);
		this.element.find('audio').remove();
	}

	this.element.find('.audio-player-minimal').remove();
	this.element.append(html);

	// this.element.html(template({audio: audio}));
};
Viewer.prototype.setPicture = function(data) {
	var template = _.template(this.element.find('.picture-template').text());
	var picture = JSON.parse(data);

	console.log(picture);
	
	var html = template({
		picture : picture
	});
	
	console.log(html);
	
	this.element.find('.image-player').remove();
	this.element.append(html);
	
	$('.image-player a').click(
			function(e) {
				$('#image-modal #image-modal-src').attr('src',
						$(this).attr('data-img-url'));
				$('#image-modal #image-modal-nav').attr('href',
						$(this).attr('data-img-url'));
			});
};
Viewer.prototype.setDoc = function(data) {
	var template = _.template(this.element.find('.doc-template').text());
	var doc = JSON.parse(data);

	this.element.html(template({
		doc : doc
	}));

	var self = this;
	setTimeout(function() {
		console.log("SET HEIGHT2!!!!");
		var width = self.element.find("iframe").parent().width();
		console.log("WIDTH: " + width);
		if (width > 100)
			self.element.find("iframe").height(width / 4 * 3);
	}, 500);

};

function getMyEUscreenUser() {

}