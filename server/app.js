var http = require('http');
var querystring = require('querystring');
var url = require('url');
var port = 4200;

var server = http.createServer().listen(port, function() {
	console.log('server is listening on http://localhost:', port);
});

server.on('request', function (req, res) {
    if (req.method == 'POST') {
        var body = '';
	    req.on('data', function (data) {
	    	body += data;
	    });
	    req.on('end', function () {
	        var post = querystring.parse(body);
	        console.log(post);
	        res.write('<h1>Server received POST message: </h1>');
	        for(var i in post) {
	        	res.write('<h2>' + i + ' : <i  style="color:blue">' + post[i] + '</i></h2>');
	        }
	        res.end(`
	        	<h3>Click to go back</h3>
				<button onclick="goBack()">Go Back</button>
				<script>
					function goBack() {
					    window.history.back();
					}
				</script>`
			);
	    });
    }
    if (req.method == 'GET') {
    	var url_parts = url.parse(req.url,true);
    	if (url_parts.query) {
    		var query = url_parts.query;
    		res.write('<h1>Server received GET message: </h1>');
    		for (var i in url_parts.query) {
    			res.write('<h2>' + i + ' : <i  style="color:blue">' + query[i] + '</i></h2>');
    		}
    	}
        console.log('q:', url_parts.query);
		res.end(`
        	<h3>Click to go back</h3>
			<button onclick="goBack()">Go Back</button>
			<script>
				function goBack() {
				    window.history.back();
				}
			</script>`
		);
    }
});