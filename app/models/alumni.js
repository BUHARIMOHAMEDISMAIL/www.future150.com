var mongoose = require('mongoose');

module.exports = mongoose.model('Alumni', {
  slug: String,
  title: String,
  bio: String,
  city: String,
  state: String,
  camp: String,
  college: String,
  class: String
});
