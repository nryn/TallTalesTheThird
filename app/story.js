'use strict'

var Message = require('./message')
var exported = require('./theme')
var Theme = exported[0]

function Story(theme){
  this.messages = [];
  this.MESSAGE_LIMIT = 20;
  this.theme = new Theme(theme, 10)
};

Story.prototype.isStoryOver = function() {
  if (this.over == true) {throw new Error("the game is over")}
};

Story.prototype.addMessage = function(text) {
  this.isStoryOver();
  this.messages.push(new Message(text));
  if (!this.isStoryStillGoing()) {this.endStory()};
};

Story.prototype.isStoryStillGoing = function () {
  return this.messages.length < this.MESSAGE_LIMIT;
};

Story.prototype.endStory = function() {
  this.over = true
}

Story.prototype.showFullStory = function() {
  return this.messages.map(function(message){return message.text}).join(" \n<br>");
};

module.exports = Story;
