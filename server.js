/*var http = require('http');

var handleRequest = function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//res.end('Welcome to Node Essential Training\n');
	res.end('README.md');
};

var server = http.createServer(handleRequest);

server.listen(3000, 'localhost'); */

//+ express

var http = require('http'),
	express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.end('Portfolio');
}); 
http.createServer(app).listen(3000); 