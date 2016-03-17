var fs = require('fs');
var http = require('http');

var requestListener = function (req, res) {
   res.writeHead(200);
   res.write(fs.readFileSync(__dirname + '/index.html'));
   res.end();
}

var server = http.createServer(requestListener);
server.listen(8080);
