var Q = require('q');

var TournamentsController = function(tournamentsDataService) {
  return {
    getTournaments: getTournaments,
    getTournamentById: getTournamentById,
    getTournamentByLegacyId: getTournamentByLegacyId,
    getTournamentBySlug: getTournamentBySlug,
    addTournament: addTournament,
    updateTournament: updateTournament
  };

  function getTournaments(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(tournamentsDataService.getAll(filter, page, pageSize));
    promises.push(tournamentsDataService.getCount(filter));
    return Q.spread(promises, function(tournaments, count) {
      res.json({
        tournaments: tournaments,
        count: count
      });
    });
  }

  function getTournamentById(req, res) {
    return tournamentsDataService.getById(req.params.id).then(function(tournament) {
      res.json(tournament);
    });
  }

  function getTournamentByLegacyId(req, res) {
    return tournamentsDataService.getByLegacyId(req.params.legacyId).then(function(tournament) {
      res.json(tournament);
    });
  }

  function getTournamentBySlug(req, res) {
    return tournamentsDataService.getBySlug(req.params.slug).then(function(tournament) {
      res.json(tournament);
    });
  }

  function addTournament(req, res) {
    return tournamentsDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateTournament(req, res) {
    return tournamentsDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
};

module.exports = TournamentsController;
