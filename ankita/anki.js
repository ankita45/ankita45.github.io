var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    displayForm(res);
});

function displayForm(res) {
    fs.readFile('sd.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
                });
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
'</html>');
        res.end();
    });
}

server.listen(8080);
