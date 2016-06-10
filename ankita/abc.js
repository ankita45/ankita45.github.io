var http=require('http')
var server=http.createServer(function(req,res)
{
	res.writeHead(200,
		{"contentType":"text/html"})
	res.end("<h1>hello</h1><p>hello anki</p>")
	res.end("<h1>hi</h1><b>how are u</b>")
})
server.listen(8080)