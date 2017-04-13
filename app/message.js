'use strict';

function Message(text){
  this.text = text;
}

Message.prototype.showText = function () {
  return this.text;
};

module.exports = Message;
