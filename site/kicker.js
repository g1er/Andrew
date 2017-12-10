var connect = require('connect');
var serve_static = require('serve-static');
var port = 8080;


connect().use(serve_static(__dirname))
.listen(port, function() {
	console.log('server is listening on http://localhost:', port);
});