function index(response) {
	response.write('Hello world !');
	response.end();
}

exports.index = index;