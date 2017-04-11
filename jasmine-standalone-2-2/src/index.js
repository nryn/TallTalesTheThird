'use strict';

function Message(text){
  this.text = text;
}

Message.prototype.showText = function () {
  return this.text;
};

function Story(){
  this.messages = [];
  this.MESSAGE_LIMIT = 20;
}

function = roundChecker() {
  if (this.messages.length < this.MESSAGE_LIMIT) {
  return true
}
  else {
    endStory();
  }
};


Story.prototype.addMessage = function(text) {
  roundChecker();
    var message = new Message(text);
    this.messages.push(message);
    return message;
  } else {
    throw new Error("the game is over")
  }
};

Story.prototype.endStory = function() {
  this.over = true
  this.showFullStory()
}

Story.prototype.showFullStory = function() {
  return this.messages.map(function(message) {
      return message.text
  }).join(" ");
};
