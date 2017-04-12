'use strict'

try {
  var Message = require('./message')
} catch(e) {
  console.log("caught exception "+ e)
}

function Story(){
  this.messages = [];
  this.MESSAGE_LIMIT = 20;
};

Story.prototype.isStoryOver = function() {
  if (this.over == true) {
    throw new Error("the game is over")
  }
};

Story.prototype.addMessage = function(text) {
  this.isStoryOver();
  this.messages.push(new Message(text));
  this.isStoryStillGoing();
};

Story.prototype.isStoryStillGoing = function () {
  if (this.messages.length === this.MESSAGE_LIMIT) {
    this.endStory();
  }
};

Story.prototype.endStory = function() {
  this.over = true
  this.showFullStory()
}

Story.prototype.showFullStory = function() {
  return this.messages.map(function(message){
    return message.text
  }).join(" \n");
};

try {
  module.exports = Story;
} catch(e) {
  console.log("caught exception "+ e)
}
