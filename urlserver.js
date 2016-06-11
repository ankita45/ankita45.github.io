var http = require('http');
var url = require('url');
var server = http.createServer(function (req, res) {
	var page=url.parse(req.url).pathname;
	res.writeHead(200,
		{"contentType":"text/html"})
  if(page=="/login")
    res.write('<!DOCTYPE html>'+
          '<html>'+
'<head>'+
'</head>'+
   '<body>'+
      '<form action= method="post" >'+
            '<label for="name">Name:</label>'+
            '<input type="text"  placeholder="Enter your full name" />'+
          
            '<label for="email">Email:</label>'+
            '<input type="email"  placeholder="Enter your email address" />'+
            
            '<label for="password">password:</label>'+
            '<input type="password"  placeholder="Enter your password" />'+
           
            '<input type="submit" value="submit" />'+
      '</form>'+
   '</body>'+
'</html>')
  
    else if(page=="/signup") 
      res.write("going to home page")
    
	console.log(page);
    


    
        res.end();
  
});
server.listen(8080);