'use strict'

var exported = require("../app/theme")
var Theme = exported[0]
var themeWords = exported[1]

describe("Theme", function() {
  var theme;

  beforeEach(function() {
    theme = new Theme("fantasy", 2);
  });

  it("should contain stored words array", function() {
    expect(theme.storyWords.constructor.name).toEqual('Array')
  });

  it("should store the name of the theme given on instantiation", function() {
    expect(theme.storyTheme).toEqual('fantasy')
  });

  it("to return the number of words requested", function() {
    expect(theme.findThemeWords("fantasy", 2).length).toEqual(2)
  });

  it("to return the number of words requested", function() {
    expect(theme.findThemeWords("fantasy", 4).length).toEqual(4)
  });

  it("returns strings from the chosen theme collection", function(){
    expect(theme.findThemeWords("fantasy", 1)[0].constructor.name).toEqual('String')
  });

  it("returns a selection of random words from a theme", function(){
    var chosenWord = theme.findThemeWords("fantasy", 1)[0]
    expect(themeWords.fantasy).toContain(chosenWord)
  });

  it("returns a selection of random words from a theme", function(){
    var chosenWord = theme.findThemeWords("space", 1)[0]
    expect(themeWords.space).toContain(chosenWord)
  });

  it("removes player used words from theme array", function() {
    theme.storyWords = ["tomato", "rocket", "space", "peppers"]
    theme.isWordUsed("I like space")
    expect(theme.storyWords).not.toContain("space");
  })
});
