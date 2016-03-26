var mongoose = require('mongoose');

module.exports = mongoose.model('Video', {
  title: String,
  youTubeId: String
});
