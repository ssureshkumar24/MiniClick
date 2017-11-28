var express = require('express');
var app = express();
var url = require('url');
var http = require('http');
var fs = require('fs');

app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/images", express.static(__dirname + '/images'));

app.get('/', function (req, res) {
   fs.readFile( "index.html", 'utf8', function (err, data) {
       res.end( data );
   });
});

app.get('/getJSON', function (req, res) {
   fs.readFile( "data/" + "data.json", 'utf8', function (err, data) {
       res.end( data );
   });
});

var server = app.listen(8080, 'localhost', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Mini click app listening at http://%s:%s", host, port)

})