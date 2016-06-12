var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var myData = ["red","green","blue"]
    res.render('login2.ejs',{data :myData } );
    res.end()
})
var server = app.listen(8080, function () { })