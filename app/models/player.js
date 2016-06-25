var mongoose = require('mongoose');

var playerSchema = mongoose.Schema({
  legacyId: Number,
  slug: {
    type: String,
    unique: true
  },
  createdDate: Date,
  lastUpdatedDate: Date,
  imageUrl: String,
  firstName: String,
  lastName: String,
  position: String,
  class: Number,
  hometownCity: String,
  hometownState: String,
  highSchool: String,
  aauTeam: String,
  heightFeet: Number,
  heightInches: Number,
  weight: Number,
  stars: Number,
  score: Number,
  satAct: String,
  twitter: String,
  colleges: [{
    college: {
      type: mongoose.Schema.ObjectId,
      ref: 'College'
    },
    levelOfInterest: String,
    offer: Boolean,
    visitDate: Date,
    commitDate: Date,
    signDate: Date
  }],
  isPaywall: Boolean,
  leagues: [String],
  shooting: String,
  dribbling: String,
  passing: String,
  rebounding: String,
  intangibles: String,
  notes: [{
    createdDate: Date,
    author: {
      type: mongoose.Schema.ObjectId,
      ref: 'User'
    },
    note: String
  }],
  strengths: [String],
  needsToImprove: [String],
  projections: String,
  pictures: [{
    imageUrl: String,
    title: String,
    photographer: String,
    location: String,
    takenDate: Date
  }],
  videos: [{
    videoUrl: String,
    title: String
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  shares: {
    type: Number,
    default: 0
  },
  followers: [{
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  }]
}, {
  toJSON: {
    virtuals: true
  }
});

playerSchema
  .virtual('followersCount')
  .get(function () {
    return this.followers.length;
  });

playerSchema
  .virtual('fullName')
  .get(function () {
    return this.firstName + ' ' + this.lastName;
  });

playerSchema
  .virtual('height')
  .get(function () {
    return this.heightFeet + '\'' + this.heightInches + '\"';
  });

playerSchema
  .virtual('hometownCityState')
  .get(function () {
    return this.hometownCity + ', ' + this.hometownState;
  });

module.exports = mongoose.model('Player', playerSchema);
