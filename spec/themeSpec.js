'use strict'

fdescribe("Theme", function() {

  beforeEach(function() {
    theme = new Theme();
  });

  fit("should contain word hash", function() {
    expect(theme.themeWords).toContain("fantasy")
  });
});
