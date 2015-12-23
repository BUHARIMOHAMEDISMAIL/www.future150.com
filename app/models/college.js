var mongoose = require('mongoose');

module.exports = mongoose.model('College', {
  legacyId: Number,
  name: String,
  initials: String,
  logoImageUrl: String
});
