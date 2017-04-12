'use strict';

function Message(text){
  this.text = text;
}

Message.prototype.showText = function () {
  return this.text;
};


try {
  module.exports = Message;
} catch(e) {
  console.log("caught exception "+ e)
}
