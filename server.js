// requiring http and fs modules
var http = require("http");
var fs = require("fs");

var PORT = 6060;

// create the server
var server = http.createServer(handleRequest);

// start the server
server.listen(PORT, function () {
	console.log("Server is listening on PORT: " + PORT);
});

function handleRequest(req, res) {
	var path = req.url;

	switch(path) {
		default:
		return displayIndex();

		case "/portfolio.html":
		return displayPortfolio();

		case "/contact.html":
		return displayContact();
	}

	function displayIndex() {
		fs.readFile(__dirname + "/index.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	};
	
	function displayPortfolio() {
		fs.readFile(__dirname + "/portfolio.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}
	
	function displayContact() {
		fs.readFile(__dirname + "/contact.html", function (err, data) {
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}
};
