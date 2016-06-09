var mongoose = require('mongoose');

module.exports = mongoose.model('Camp', {
  slug: String,
  title: String,
  city: String,
  state: String,
  imageUrl: String,
  description: String
});
