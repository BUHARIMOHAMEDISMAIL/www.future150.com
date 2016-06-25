var Tournament = require('../models/tournament');

var TournamentDataService = function() {
  return {
    getAll: getAll,
    getCount: getCount,
    getById: getById,
    getByLegacyId: getByLegacyId,
    getBySlug: getBySlug,
    add: add,
    update: update
  };

  function getAll(filter, page, pageSize) {
    return Tournament.find(filter)
      .sort('-createdDate')
      .skip(page * pageSize)
      .limit(pageSize)
      .exec();
  }

  function getCount(filter) {
    return Tournament.count(filter)
      .exec();
  }

  function getById(id) {
    return Tournament.findById(id)
      .exec();
  }

  function getByLegacyId(legacyId) {
    return Tournament.findOne({ legacyId: legacyId })
      .exec();
  }

  function getBySlug(slug) {
    return Tournament.findOne({ slug: slug })
      .exec();
  }

  function add(tournamentToAdd) {
    var tournament = new Tournament(tournamentToAdd);

    return tournament.save();
  }

  function update(id, tournament) {
    return Tournament.findByIdAndUpdate(id, tournament)
      .exec();
  }
};

module.exports = TournamentDataService;
