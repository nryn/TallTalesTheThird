var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var Story = require('./story');

var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);

console.log("Server up...")
var story = new Story();
console.log("Story exists...")

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

//controller helper

function spawnMessagesAndCheckStoryOver(socket) {
  socket.emit('spawn all messages', {messages: story.messages})
  if (story.over) {
    socket.emit('end game', "Sorry, this story has ended.");
    socket.disconnect()
  };
};

function rotatePlayers() {
  connections.push(connections.shift())
  io.sockets.emit('hide textbox')
  connections[0].emit('show textbox')
};

//routing and socket controller

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log("connection " + socket.id + " made. there are " + connections.length + " connections." );
  spawnMessagesAndCheckStoryOver(socket);

  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log("disconnect happened. there are " + connections.length + " connections." );
  });

  socket.on('send message', function(data){
    console.log("send message received with data: " + data);
    // console.log(connections[0].id + "'s turn")
    story.addMessage(data)
    io.sockets.emit('update messages', {message: story.messages[story.messages.length - 1]})
    if (story.over) {io.sockets.emit('end game', story.showFullStory())}
    rotatePlayers();
  });



});
