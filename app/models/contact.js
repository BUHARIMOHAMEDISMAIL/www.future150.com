var mongoose = require('mongoose');

module.exports = mongoose.model('Contact', {
  firstName: String,
  lastName: String,
  title: String,
  phoneNumber: String,
  emailAddress: String,
  twitterHandle: String,
  profileImageUrl: String
});
