function route(handle, pathname, response) {
	if (typeof handle[pathname] === 'function') {
		handle[pathname](response);
	} else {
		console.log('Requested pathname "'+pathname+'" has no handler');
		response.end();
	}
}

exports.route = route;