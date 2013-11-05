var server = require("./web-service");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/sendWords"] = requestHandlers.sendWords;
handle["/saveWord"] = requestHandlers.saveWord;

server.start(router.route, handle);