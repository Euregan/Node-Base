var server = require("./server/server");
var router = require("./server/router");
var controller = require("./server/controller");

var routes = {};
routes["/"] = controller.index;
routes["/scripts/socket.io.js"] = controller.getSocket;
routes["/api/identity/create"] = controller.createIdentity;
routes["/identities"] = controller.showIdentities;

server.start(router.route, routes);