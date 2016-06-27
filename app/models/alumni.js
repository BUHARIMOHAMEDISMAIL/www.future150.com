var mongoose = require('mongoose');

module.exports = mongoose.model('alumnilist', {
  name: String,
  imageUrl: String,
  bio: String,
  city: String,
  state: String,
  camp: String,
  college: String,
  class: Number
});
