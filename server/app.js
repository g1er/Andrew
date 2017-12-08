var http = require('http');
var querystring = require('querystring');
var url = require('url');
var fs = require('fs');
var port = 4200;

var server = http.createServer().listen(port, function() {
	console.log('server is listening on http://localhost:', port);
});

server.on('request', function (req, res) {

	res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

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

    	if(url_parts.pathname == '/translate/ru'){
			fs.readFile("data/ru.json", function(err, data) {
				if (err) {
					res.write('error' + err)
				} else {
			    res.write(data);
			    res.end();					
				}
			});
    	}

    	else if(url_parts.pathname == '/translate/en'){
			fs.readFile("data/en.json", function(err, data) {
				if (err) {
					res.write('error' + err)
				} else {
			    res.write(data);
			    res.end();				
				}
			});
    	}

    	else {
    		console.log('else')
	    	if (url_parts.query) {
	    		var query = url_parts.query;
    			res.write('<h1>Server received GET message: </h1>');
    			for (var i in url_parts.query) {
    			res.write('<h2>' + i + ' : <i  style="color:blue">' + query[i] + '</i></h2>');
    			}
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

    	}

        console.log('query:', url_parts.query);
    	console.log('pathname:', url_parts.pathname);

    }
});