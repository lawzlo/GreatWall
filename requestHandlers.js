var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");
var util = require('util');
var wall = "";
var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<div id=wall>'

var body1 = '</div>'+
    '<form action="/saveWord" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="words">'+
    '<input type="submit" value="biang!" />'+
    '</form>'+
    '</body>'+
    '</html>';
var file_path = "wall.txt";

function start(response) {
    showWall(response);
	console.log("Request handler 'start' was called.");
}

function sendWords(response, request) {
	saveWord(response, request);
	showWall(response);
	console.log("Request handler 'sendWords' was called.");
}

function saveWord(response, request) {
    var form = new formidable.IncomingForm();

    form.parse(request, function(err, fields, files) {
      fs.appendFileSync(file_path, "\n" + fields['words'] + "</br>");
      showWall(response);
    });
}

function showWall(response) {
	console.log("Request handler 'getWall' was called.");
	fs.readFile(file_path, "utf8", function(error, data) {
		if (error) {
			console.log(error);
		}
		console.log("Async loading file.");
		console.log(data);
		response.writeHead(200, {"Content-Type": "text/html"});
    	response.write(body);
    	response.write(data);
    	response.write(body1);
    	response.end();
	});
}
exports.start = start;
exports.showWall = showWall;
exports.sendWords = sendWords;
exports.saveWord = saveWord;
