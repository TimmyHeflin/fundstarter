var fs = require('fs');
var http = require('http');
var website;

fs.readFile(__dirname + '/index.html', function (err, data) {
    if(err) {
	return console.log(err);
    }
    website = data;
});

var requestListener = function (req, res) {
   res.writeHead(200);
   res.write(website);
   res.end();
}

var server = http.createServer(requestListener);
server.listen(8080);
