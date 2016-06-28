var CampsRouter = function(campsController) {
  var express = require('express'),
    router = express.Router();

  router.get('/camps', campsController.getCamps);

  router.get('/camps/:id([0-9a-f]{24})', campsController.getCampById);

  router.get('/camps/:legacyId([0-9]+)', campsController.getCampByLegacyId);

  router.get('/camps/:slug', campsController.getCampBySlug);

  router.post('/camps', campsController.addCamp);

  router.put('/camps/:id', campsController.updateCamp);

  return router;
};

module.exports = CampsRouter;
