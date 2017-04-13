'use strict';

function Theme(chosenTheme, amount){
  this.storyWords = [];
  this.storyTheme = chosenTheme;
  this.findThemeWords(chosenTheme, amount);
};

Theme.prototype.findThemeWords = function (chosenTheme, amount) {
  var themeWordsToShuffle = themeWords[chosenTheme];
  shuffleArray(themeWordsToShuffle);
  this.storyWords = themeWordsToShuffle.slice(0, (amount));
  return this.storyWords;
};

Theme.prototype.isWordUsed = function(text) {
  var that = this
  this.storyWords.forEach(function(word) {
    word.toLowerCase()
    if (text.toLowerCase().indexOf(word) >=0) {
      that.storyWords.splice(that.storyWords.indexOf(word), 1)
    };
  });
};

var themeWords = {
  "fantasy" : ["Potato", "Chocolate", "Abnormal", "Abracadabra", "Adventure", "Alchemy", "Allegorical", "Allusion", "Amulet", "Apparition", "Apprentice", "Atmosphere", "Attraction", "Awe", "Beast", "Beauty", "Belief", "Berserk", "Bewitch", "Bizarre", "Black cat", "Blindfold", "Bogeyman", "Brew", "Brownies", "Captivate", "Cast", "Castles", "Cauldron", "Cave", "Chalice", "Changeling", "Characters", "Charisma", "Charming", "Chimerical", "Clairvoyant", "Clarity", "Classic", "Cliffs", "Clock", "Collapse", "Comic", "Compare", "Conjure", "Conspirator", "Creative", "Creature", "Crisis", "Crow", "Cruelty", "Crystal ball", "Curious", "Curse", "Dancing", "Daring", "Dazzle", "Deeds", "Deformity", "Delirious", "Demon", "Detect", "Detection", "Detective", "Disappearance", "Disaster", "Dose", "Dragon", "Dramatic", "Dread", "Dream", "Dwarf", "Eek", "Eerie", "Elf", "Empire", "Enchanting", "ESP", "Event", "Evil", "Experience", "Fable", "Fairy", "Fairy ring", "Fairy tale", "Familiar", "Fanciful", "Fantastic", "Fantasy", "Fascination", "Favors", "Fiction", "Fiery", "Figment", "Folklore", "Foolishness", "Forces", "Forgery", "Garb", "Gestures", "Ghost", "Giant", "Gifts", "Glimmer", "Gnome", "Goblin", "Godmother", "Gowns", "Grateful", "Graveyard", "Green", "Grimm", "Grotesque", "Hag", "Hallucinate", "Harbinger", "Helpful", "Herbs", "Heroic", "Hollow hills", "Horror", "Howls", "Humped back", "Idyll", "Illusions", "Image", "Imagery", "Imaginary", "Imagination", "Imp", "Impressive", "Improvise", "Impulse", "Incantation", "Incognito", "Informative", "Ingenious", "Inspiration", "Invisible", "Jargon", "Jaunt", "Jiggle", "Joking", "Keepsake", "Kettle", "Kidnap", "King", "Kingdom", "Lands", "Legend", "Legerdemain", "Leprechauns", "Lore", "Lucky", "Lunar", "Magic", "Magic carpet", "Magical", "Magician", "Majesty", "Malevolence", "Mask", "Medieval", "Medium", "Miracle", "Mischief", "Mischievous", "Misshapen", "Monster", "Moon", "Muse", "Musings", "Mysterious", "Mystery", "Mystical", "Myth", "Mythical", "Narration", "Nature", "Necromancer", "Necromancy", "Nemesis", "Newt", "Notion", "Oberon", "Odd", "Ogre", "Oracle", "Otherworldly", "Overpower", "Overwhelm", "Owl", "Pattern", "Perform", "Petrify", "Pixie", "Pixie dust", "Plot", "Poisonous", "Potent", "Potion", "Powder", "Power", "Prey", "Prince", "Prophet", "Protection", "Prowl", "Quail", "Quake", "Quash", "Quaver", "Queen", "Quest", "Question", "Quizzical", "Raconteur", "Rage", "Realm", "Reasoning", "Reference", "Reign", "Repel", "Reveal", "Robe", "Rule", "Sage", "Sandman", "Scare", "Scold", "Scroll", "Seeking", "Seer", "Setting", "Shaman", "Soothsayer", "Sorcerer", "Sorcery", "Specter", "Speculation", "Spell", "Spider", "Spirits", "Stars", "Story", "Substitution", "Supernatural", "Superstition", "Talisman", "Terror", "Theory", "Thrilling", "Torch", "Tragic", "Transform", "Tremors", "Tricks", "Troll", "Unbelievable", "Unexplained", "Unicorn", "Unique", "Unusual", "Valiant", "Valor", "Vampire", "Vanguard", "Vanish", "Vanquish", "Variety", "Venomous", "Version", "Vice", "Vicious", "Victim", "Visionary", "Vital", "Wail", "Wand", "Ward", "Watchful", "Weird", "Werewolf", "Western", "Whim", "Whimsical", "Whine", "Whisk", "Whispers", "White", "Wicked", "Willies", "Win", "Wince", "Wisdom", "Wish", "Witch", "Worry", "Worship", "Wrinkled", "Wrongdoing", "Xanadu", "Yearn", "Yesteryear", "Youth", "Yowl", "Zap!", "zealous", "Zigzag", "Zounds!"],
  "space" : ["Absolute magnitude", "Absolute zero", "Acceleration", "Airglow", "Albedo", "Angstrom unit", "Annular", "Apastron", "Aphelion", "Apogee", "Aerolite", "Asteroid", "Astrology", "Astronomical Unit", "Astrophysics", "Atmosphere", "Atom", "Aurora", "Axis", "Background radiation", "Barycentre", "Binary star", "Black Hole", "Bolide", "Bolometer", "Celestial sphere", "Cepheid", "Charge-Coupled Device", "Chromosphere", "Circumpolar star", "Clusters", "Color index", "Coma", "Comet", "Conjunction", "Constellation", "Corona", "Coronagraph", "Cosmic rays", "Cosmology", "Day", "Density", "Direct motion", "Diurnal motion", "Earthshine", "Eclipse", "Ecliptic", "Ecosphere", "Electron", "Element", "Equinox", "Escape velocity", "Exosphere", "Flares", "Solar Flares", "Galaxy", "Gamma ray", "Geocentric", "Geophysics", "Gibbous", "HI region", "HII region", "Hertzsprung-Russell Diagram", "Hubble Constant", "Inferior planets", "Ionosphere", "Kelvin", "Kepler's Laws of Planetary Motion", "Kirkwood gaps", "Light Year", "Limb", "Local Group", "Lunation", "Magnetosphere", "Mass", "Meteor", "Meteorite", "Meteoroids", "Micrometeorites", "Milky Way", "Minor planet", "Molecule", "Multiple star", "Nadir", "Nebula", "Neutrino", "Neutron star", "Nova", "Oblate Spheroid", "Occultation", "Opposition", "Orbit", "Ozone", "Parallax", "Parsec", "Penumbra", "Periastron", "Perigee", "Perihelion", "Perturbations", "Phases", "Photosphere", "Planet", "Planetary nebula", "Precession", "Proper motion", "Proton", "Quasar", "Radiant", "Radio galaxies", "Red shift", "Revolve", "Rotate", "Saros cycle", "Satellite", "Scintillation", "Seeing", "Selenography", "Seyfert galaxies", "Shooting star", "Sidereal Period", "Solar System", "Solar wind", "Solstice", "Spicules", "Stratosphere", "Star", "Supernova", "Sundial", "Sun spots", "Superior planets", "Synchronous satellite", "Synodic Period", "Syzygy", "Terminator", "Thermocouple", "Time dilation", "Trojans asteroids", "Troposphere", "Umbra", "Variable stars", "Zenith"],
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

module.exports = [Theme, themeWords];
