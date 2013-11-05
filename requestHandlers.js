var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
function start(response) {
	var wall = getWall();
	console.log("wall is: " + wall);
	console.log("Request handler 'start' was called.");
	var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<div id=wall>'+
    wall+
    '</div>'+
    '<form action="/sendWords" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="words">'+
    '<input type="submit" value="biang!" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function sendWords(response, request) {
	console.log("Request handler 'sendWords' was called.");
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("Babababababba<br/>");
	response.end();
}

function getWall() {
	console.log("Request handler 'getWall' was called.");
	fs.readFile("/Users/tanlin/Developer/NodeJS/GreatWall/wall.txt", "utf8", function(error, data) {
		if (error) {
			return console.log(error);
		}
		console.log(data);
		return data;
	});
}
exports.start = start;
exports.getWall = getWall;