var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
  legacyId: Number,
  slug: {
    type: String,
    unique: true
  },
  title: String,
  description: String,
  createdDate: Date,
  lastUpdatedDate: Date,
  imageUrl: String,
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  status: String,
  body: String,
  isPaywalled: Boolean,
  city: String,
  state: String,
  site: String,
  isVip: Boolean
});
