var Favicon = function(options){
	var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/eddie/apps/euscreenxlelements/img/favicon.png';
    document.getElementsByTagName('head')[0].appendChild(link);
}

Favicon.prototype = Object.create(Component.prototype);