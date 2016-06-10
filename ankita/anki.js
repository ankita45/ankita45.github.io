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
        res.write(data);
        res.end();
    });
}

server.listen(8080);
