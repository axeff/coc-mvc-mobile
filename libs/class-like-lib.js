$import = function(file, success){

	if (typeof file == "string")
		file = [file];

	for(var i = 0; i<= file.length-1; i++){
		var head= document.getElementsByTagName('head')[0];
		var script= document.createElement('script');
		script.type= 'text/javascript';
		script.src= file[i];
		head.appendChild(script);
	}
	
	$(document).ready(function () {
		success();
	});

	
}

MVCApp = function(){
 	
	app = new AppRouter();
	Backbone.history.start();

}