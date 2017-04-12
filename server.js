var express = require('express');
var app = express();
var server = require('http').createServer(app);
//var io = require('socket.io').listen(server);

server.listen(3000);

console.log("Server up...")

app.use(express.static('src'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/src/index.html')
});
