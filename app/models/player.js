var mongoose = require('mongoose');

module.exports = mongoose.model('Player', {
  legacyId: Number,
  slug: String,
  description: String,
  createdDate: Date,
  lastUpdatedDate: Date,
  firstName: String,
  position: String,
  lastName: String,
  imageUrl: String,
  hometownCity: String,
  hometownState: String,
  class: Number,
  aauTeam: String,
  heightFeet: Number,
  heightInches: Number,
  highSchool: String,
  starts: Number,
  weight: Number,
  notes: String,
  projections: String
});
