var Story = require('../app/story');

describe("Story", function() {

  beforeEach(function() {
    story = new Story();
  });

  it("should contain messages array", function() {
    expect(story.messages).toEqual(new Array)
  });

  it("can make message objects", function() {
    story.addMessage("i am the text again")
    expect(story.messages[0].constructor.name).toEqual("Message")
  });

  it("should accept messages in to the array", function() {
    story.addMessage("i am the text again");
    expect(story.messages[0].text).toEqual("i am the text again")
  });

  it("should have a default messages maximum", function() {
    for(var i=0;i<story.MESSAGE_LIMIT;i++) {
      story.addMessage("this is a regular message")
    }
    expect(function() {
      story.addMessage("this should be game over")
    }).toThrow("the game is over")
  });

  it("should end the story on the max message submission", function() {
    for(var i = 0; i < story.MESSAGE_LIMIT; i++) {
      story.addMessage("this is a message")
    }
    expect(story.over).toBe(true)
  });

  it("should return the full story", function() {
    for(var i=0; i<2; i++) {
      story.addMessage("this is a regular message")
    }
    expect(story.showFullStory()).toEqual("this is a regular message \nthis is a regular message")
  });
});
