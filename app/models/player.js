var mongoose = require('mongoose');

module.exports = mongoose.model('Player', {
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
  stats: [{
    year: Number,
    points: Number,
    rebounds: Number,
    assists: Number,
    steals: Number,
    blocks: Number,
    turnovers: Number
  }],
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
  notes: String,
  strengths: [String],
  needsToImprove: [String],
  projections: String
});
