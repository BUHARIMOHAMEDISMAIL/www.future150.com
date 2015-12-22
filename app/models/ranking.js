var mongoose = require('mongoose'),
  Player = require('./player');

module.exports = mongoose.model('Ranking', {
  type: String,
  year: Number,
  players: [
    {
      rank: Number,
      player: Player
    }
  ]
});
