var mongoose = require('mongoose');

module.exports = mongoose.model('alumni', {
  legacyId: Number,
  slug: String,
  title: String,
  bio: String,
  city: String,
  state: String,
  camp: String,
  college: String,
  class: String
});
