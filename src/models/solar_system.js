const PubSub = require('../helpers/pub_sub.js')
const Planets = require('../data/planets.js')

const SolarSystem = function(planets) {
  this.planets = planets;
};

Planets.prototype.bindEvents = function(){
  PubSub.publish('Planets:all-planets-ready', this.planets);
}


module.exports = SolarSystem;
