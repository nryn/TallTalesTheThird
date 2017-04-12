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
    for(i=0;i<story.MESSAGE_LIMIT;i++) {
      story.addMessage("this is a regular message")
    }
    expect(function() {
      story.addMessage("this should be game over")
    }).toThrowError("the game is over")
  });

  it("should end the story on the max message submission", function() {
    for(i = 0; i < story.MESSAGE_LIMIT; i++) {
      story.addMessage("this is a message")
    }
    expect(story.over).toBe(true)
  });

  it("should return the full story", function() {
    for(i=0; i<2; i++) {
      story.addMessage("this is a regular message")
    }
    expect(story.showFullStory()).toEqual("this is a regular message \nthis is a regular message")
  });
});



//   //demonstrates use of custom matcher
//   expect(player).toBePlaying(song);
// });
//
// describe("when song has been paused", function() {
//   beforeEach(function() {
//     player.play(song);
//     player.pause();
//   });
//
//   it("should indicate that the song is currently paused", function() {
//     expect(player.isPlaying).toBeFalsy();
//
//     // demonstrates use of 'not' with a custom matcher
//     expect(player).not.toBePlaying(song);
//   });
//
//   it("should be possible to resume", function() {
//     player.resume();
//     expect(player.isPlaying).toBeTruthy();
//     expect(player.currentlyPlayingSong).toEqual(song);
//   });
// });
//
// // demonstrates use of spies to intercept and test method calls
// it("tells the current song if the user has made it a favorite", function() {
//   spyOn(song, 'persistFavoriteStatus');
//
//   player.play(song);
//   player.makeFavorite();
//
//   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
// });
//
// //demonstrates use of expected exceptions
// describe("#resume", function() {
//   it("should throw an exception if song is already playing", function() {
//     player.play(song);
//
//     expect(function() {
//       player.resume();
//     }).toThrowError("song is already playing");
//   });
// });
