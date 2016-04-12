var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  legacyId: String,
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  emailAddress: String
}, {
  toJSON: {
    virtuals: true
  }
});

userSchema
  .virtual('fullName')
  .get(function () {
    return this.firstName + ', ' + this.lastName;
  });

module.exports = mongoose.model('User', userSchema);
