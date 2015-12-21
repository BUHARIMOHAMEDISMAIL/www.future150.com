var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
  legacyId: Number,
  firstName: String,
  lastName: String,
  title: String,
  phoneNumber: String,
  emailAddress: String,
  twitterHandle: String,
  profileImageUrl: String
});
