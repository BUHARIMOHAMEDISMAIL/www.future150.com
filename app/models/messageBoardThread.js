var mongoose = require('mongoose');

module.exports = mongoose.model('MessageBoardThread', {
  slug: {
    type: String,
    unique: true
  },
  title: String,
  starter: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  startDate: Date,
  replies: Number,
  views: Number
});
