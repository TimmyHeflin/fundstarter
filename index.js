var fs = require('fs');
var http = require('http');
var website;
var buffer;

fs.open(__dirname + '/index.html', 'r', function(err, fd) {
    if(err) {
        return console.log(err);
    }

    fs.stat(__dirname + '/index.html', function(err, stats) {
        if(err) {
	    return console.log(err);
	}
        
	buffer = new Buffer(stats.size);

        fs.read(fd, buffer, 0, buffer.length, null, 
		function(err, bytesRead, buffer) {
		    if(err) {
			return console.log(err);
		    }

	            website = buffer.toString('utf8', 0, bytesRead); 
		    
	});
    });
});

var requestListener = function (req, res) {
   res.writeHead(200);
   res.write(website);
   res.end();
}

var server = http.createServer(requestListener);
server.listen(8080);
