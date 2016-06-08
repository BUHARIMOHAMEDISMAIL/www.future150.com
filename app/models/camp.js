var mongoose = require('mongoose');

module.exports = mongoose.model('Camp', {
  slug: String,
  type: String,
  title: String,
  city: String,
  state: String,
  imageUrl: String,
  description: String
});
