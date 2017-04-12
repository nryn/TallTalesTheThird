'use strict'

var Message = require('./message')

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
  var message = new Message(text);
  this.messages.push(message);
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
  return this.messages.map(message => message.text).join(" \n");
};


module.exports = Story;
