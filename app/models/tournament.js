var mongoose = require('mongoose');

module.exports = mongoose.model('Tournament', {
  slug: String,
  title: String,
  city: String,
  state: String,
  imageUrl: String,
  description: String
});
