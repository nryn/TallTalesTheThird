'use strict';

function Theme(chosenTheme, amount){

};

Theme.prototype.findThemeWords = function (chosenTheme, amount) {
  var array = []
  for(var i = 0; i < amount; i++) {
    var word = themeWords.chosenTheme[Math.floor(Math.random()*themeWords.chosenTheme.length)];
    array.push(word)
  }
    return array
};

var themeWords = {
  "fantasy" : ["these","are", "potato", "chocolate"],
  "space" : ["more", "random", "words"]
}

module.exports = Theme;
