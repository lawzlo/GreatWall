var http = require("http");
var url = require("url");
var formidable = require("formidable");
var sys = require("sys");

function start(route, handle) {
	
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		route(handle, pathname, response, request);
	}
	http.createServer(onRequest).listen(8000);
	console.log("Server has started.");
}

exports.start = start;