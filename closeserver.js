var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
	var page=url.parse(req.url).pathname;
	res.writeHead(200,
		{"contentType":"text/html"})
  res.write("hello")

  res.end()
  });
server.on('close', function(req){
  console.log("goodbye! server")

})
server.listen(8080);
server.close()