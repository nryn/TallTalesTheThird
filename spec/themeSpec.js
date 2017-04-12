'use strict'

describe("Theme", function() {
  var theme;

  beforeEach(function() {
    theme = new Theme('theme', 2);
  });

  it("to return the number of words requested", function() {
    expect(theme.findThemeWords("theme", 2).length).toEqual(2)
  });

  fdescribe('testing randomiser', function() {

    spyOn(Theme.findThemeWords.prototype, '';

    fit("returns a selection of random words from a theme", function(){

      expect(theme.findThemeWords("fantasy", 2)).toContain("these", "are")
    });

    // fit("returns a selection of random words from a theme", function(){
    //   console.log('i got here')
    //   expect(theme.findThemeWords("space", 2)).toContain("more", "random")
    // });
  });
});
