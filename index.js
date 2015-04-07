var server = require("./server/server");
var router = require("./server/router");
var controller = require("./server/controller");

var routes = {};
routes["/"] = controller.index;

server.start(router.route, routes);