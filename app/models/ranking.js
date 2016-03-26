var mongoose = require('mongoose');

module.exports = mongoose.model('Ranking', {
  type: String,
  year: Number,
  players: [
    {
      rank: Number,
      player: {
        type: mongoose.Schema.ObjectId,
        ref: 'Player'
      }
    }
  ]
});
