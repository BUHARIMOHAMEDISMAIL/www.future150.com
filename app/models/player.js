var mongoose = require('mongoose');

module.exports = mongoose.model('Player', {
  slug: String,
  description: String,
  firstName: String,
  position: String,
  lastName: String,
  imageUrl: String,
  hometownCity: String,
  hometownState: String,
  class: Number
});
