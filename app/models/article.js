var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
  slug: String,
  description: String,
  date: Date,
  title: String,
  imageUrl: String
});
