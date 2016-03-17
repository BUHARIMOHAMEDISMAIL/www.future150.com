var mongoose = require('mongoose');

module.exports = mongoose.model('College', {
  legacyId: Number,
  slug: String,
  name: String,
  initials: String,
  logoImageUrl: String
});
