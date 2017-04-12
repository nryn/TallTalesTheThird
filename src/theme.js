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

var themeWords = {
  "fantasy" : ["these","are", "potato", "chocolate"],
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

module.exports = Theme;
