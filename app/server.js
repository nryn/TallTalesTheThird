var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var Story = require('./story');
var Theme = require('./theme');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(3000);

console.log("Server up...")

app.use(express.static('public'));

app.get('/theme', function(req, res) {
  res.sendFile(__dirname + '/theme.html')
});

app.get('/index', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  console.log(story)
});

app.post('/index', function(req, res) {
  res.sendFile(__dirname + '/index.html')
  story = new Story(Object.keys(req.body)[0])
});


io.sockets.on('connection', function(socket){
  socket.on('client-theme-pic', function(data) {
    console.log("hello")
  })
  });
