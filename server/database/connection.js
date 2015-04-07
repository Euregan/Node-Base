var mongo = require('mongodb').MongoClient;

function connect(callback) {
	mongo.connect(
		'mongodb://127.0.0.1:27017/mydb',
		function(err, connection) {
			callback(connection);
		});
}

function disconnect(connection) {
	connection.close();
}

exports.connect = connect;
exports.disconnect = disconnect;