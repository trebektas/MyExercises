/**
 * Exercise 3: Create an HTTP web server
 */

const http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
	if (req.url === '/') {
		fs.readFile('./index.html', 'utf8', function (err,data) {
			if (err) {
				return console.log(err);
			  }
			  res.writeHead(200, { 'Content-Type':'text/html'}); // Sends a response back to the client
			  res.end(data); // Ends the response
		});
	}

	if (req.url === '/index.js') {
		fs.readFile('./index.js', function (err,data) {
			if (err) {
				return console.log(err);
			  }
			  res.writeHead(200, { 'Content-Type':'application/javascript'}); // Sends a response back to the client
			  res.end(data); // Ends the response
		});
	}

	if (req.url === '/style.css') {
		fs.readFile('./style.css', function (err,data) {
			if (err) {
				return console.log(err);
			  }
			  res.writeHead(200, { 'Content-Type':'text/css'}); // Sends a response back to the client
			  res.end(data); // Ends the response
		});
	}
	
});

server.listen(3000); // The server starts to listen on port 3000
