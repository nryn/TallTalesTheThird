var Message = require('../src/message')

describe("Message", function() {

  beforeEach(function() {
    message = new Message("i am the text");
  });

  it("should contain some text", function() {
    expect(message.text).toEqual("i am the text");
  });

  it("should be able to get the text", function() {
    expect(message.showText()).toEqual("i am the text");
  });
});
