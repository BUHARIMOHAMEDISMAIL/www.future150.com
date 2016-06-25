var TournamentsRouter = function(tournamentsController) {
  var express = require('express'),
    router = express.Router();

  router.get('/tournaments', tournamentsController.getTournaments);

  router.get('/tournaments/:id([0-9a-f]{24})', tournamentsController.getTournamentById);

  router.get('/tournaments/:legacyId([0-9]+)', tournamentsController.getTournamentByLegacyId);

  router.get('/tournaments/:slug', tournamentsController.getTournamentBySlug);

  router.post('/tournaments', tournamentsController.addTournament);

  router.put('/tournaments/:id', tournamentsController.updateTournament);

  return router;
};

module.exports = TournamentsRouter;
