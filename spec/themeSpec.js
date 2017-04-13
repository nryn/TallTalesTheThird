'use strict'

fdescribe("Theme", function() {
  var theme;

  beforeEach(function() {
    theme = new Theme("fantasy", 2);
  });

  fit("should contain stored words array", function() {
    expect(theme.storyWords.constructor.name).toEqual('Array')
  });

  fit("should store the name of the theme given on instantiation", function() {
    expect(theme.storyTheme).toEqual('fantasy')
  });

  fit("to return the number of words requested", function() {
    expect(theme.findThemeWords("fantasy", 2).length).toEqual(2)
  });

  fit("to return the number of words requested", function() {
    expect(theme.findThemeWords("fantasy", 4).length).toEqual(4)
  });

  fit("returns strings from the chosen theme collection", function(){
    expect(theme.findThemeWords("fantasy", 1)[0].constructor.name).toEqual('String')
  });

  fit("returns a selection of random words from a theme", function(){
    var chosenWord = theme.findThemeWords("fantasy", 1)[0]
    expect(themeWords.fantasy).toContain(chosenWord)
  });

  fit("returns a selection of random words from a theme", function(){
    var chosenWord = theme.findThemeWords("space", 1)[0]
    expect(themeWords.space).toContain(chosenWord)
  });
});
