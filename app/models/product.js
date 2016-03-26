var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {
  slug: String,
  name: String,
  description: String,
  imageUrl: String
});
