var http = require('http');
var server = require('http').createServer();
var io = require('socket.io')(server);
var url = require("url");

function start(route, handle) {
	server.on('request', function (request, response) {
		var pathname = url.parse(request.url).pathname;

		route(handle, pathname, response);
	});

	server.listen(8888);
}

exports.start = start;