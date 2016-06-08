var mongoose = require('mongoose');

module.exports = mongoose.model('Tournament', {
  slug: String,
  type: String,
  title: String,
  city: String,
  state: String,
  imageUrl: String,
  description: String
});
