var http=require('http')
var server=http.createServer(function(req,res)
{
	res.writeHead(200,
		{"contentType":"text/html"})
	res.end("<h1>hello</h1><p>hello anki</p>")
})
server.listen(8080)