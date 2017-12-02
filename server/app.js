var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 4200;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.get('/api', function(req, res) {
	console.log('received GET data: ', res.query);
	res.end('Received your GET request!');
});
app.post('/api', function(req, res) {
	res.write('<h1>Thank you for submitting:</h1></br>');
	var submittedData = req.body;
	for(var i in submittedData) {
		res.write(  '<h2 style="color:blue"><i>' + i + ' : ' + submittedData[i] + '</i></h2>'+ '</br>');
		console.log(i + ' : ' + submittedData[i]);
	}
	res.end(`
		<button onclick="goBack()">Go Back</button>

		<script>
		function goBack() {
		    window.history.back();
		}
		</script>`
	);
	});

app.listen(port, function(err) {
	console.log('running on http://localhost:', port, '/api');
});
