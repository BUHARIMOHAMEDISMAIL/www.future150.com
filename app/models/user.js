var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  legacyId: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailAddress: String
});
