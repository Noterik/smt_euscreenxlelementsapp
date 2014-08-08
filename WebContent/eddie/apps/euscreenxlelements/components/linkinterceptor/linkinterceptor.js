var Linkinterceptor = function(options){
	console.log("Linkinterceptor()");
	Component.apply(this, arguments);
}
Linkinterceptor.prototype = Object.create(Component.prototype);
Linkinterceptor.prototype.interceptLinks = function(){
	jQuery('.no-prod').on('click', function(event){
		event.preventDefault();
		var message = jQuery(this).data('message');
		if(!message){
			alert("Functionality is not available yet");
		}else{
			alert(message);
		}
	});
};