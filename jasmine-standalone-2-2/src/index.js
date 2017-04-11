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

Story.prototype.addMessage = function(text) {
  if (this.messages.length < this.MESSAGE_LIMIT) {
    var message = new Message(text);
    this.messages.push(message);
    return message;
  } else {
    return "the game is over"
  }
};
