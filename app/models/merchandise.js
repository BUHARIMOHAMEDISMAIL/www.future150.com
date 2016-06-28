var mongoose = require('mongoose');

module.exports = mongoose.model('merchandise', {
  name: String,
  description: String,
  price: String
});
