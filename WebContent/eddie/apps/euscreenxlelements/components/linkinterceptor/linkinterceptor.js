var Linkinterceptor = function(options){
	console.log("Linkinterceptor()");
	Component.apply(this, arguments);
}
Linkinterceptor.prototype = Object.create(Component.prototype);
Linkinterceptor.prototype.interceptLinks = function(){
	jQuery('a[data-warning-experimental="true"]').on('click', function(event){
		event.preventDefault();
		if(!eddie.getComponent('config') || !eddie.getComponent('config').getSetting('allow-experimental') || eddie.getComponent('config').getSetting('allow-experimental') !== "true"){
			var message = jQuery(this).data('message');
			if(!message){
				alert("Functionality is not available yet");
			}else{
				alert(message);
			}
		}
	})
	
	jQuery('a[data-404-experimental="true"]').on('click', function(event){
		if(!eddie.getComponent('config') || !eddie.getComponent('config').getSetting('allow-experimental') || eddie.getComponent('config').getSetting('allow-experimental') !== "true"){
			event.preventDefault();
			location.href = "404.html";
		}
	});
};