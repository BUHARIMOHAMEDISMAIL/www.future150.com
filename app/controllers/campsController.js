var Q = require('q');

var CampsController = function(campsDataService) {
  return {
    getCamps: getCamps,
    getCampById: getCampById,
    getCampByLegacyId: getCampByLegacyId,
    getCampBySlug: getCampBySlug,
    addCamp: addCamp,
    updateCamp: updateCamp
  };

  function getCamps(req, res) {
    var filter = {},
      page = (req.query.page - 1) || 0,
      pageSize = req.query.pageSize || 10;
    if (req.query.site) {
      filter.site = req.query.site;
    }
    var promises = [];
    promises.push(campsDataService.getAll(filter, page, pageSize));
    promises.push(campsDataService.getCount(filter));
    return Q.spread(promises, function(camps, count) {
      res.json({
        camps: camps,
        count: count
      });
    });
  }

  function getCampById(req, res) {
    return campsDataService.getById(req.params.id).then(function(camp) {
      res.json(camp);
    });
  }

  function getCampByLegacyId(req, res) {
    return campsDataService.getByLegacyId(req.params.legacyId).then(function(camp) {
      res.json(camp);
    });
  }

  function getCampBySlug(req, res) {
    return campsDataService.getBySlug(req.params.slug).then(function(camp) {
      res.json(camp);
    });
  }

  function addCamp(req, res) {
    return campsDataService.add(req.body).then(function() {
      res.sendStatus(201);
    });
  }

  function updateCamp(req, res) {
    return campsDataService.update(req.params.id, req.body).then(function() {
      res.sendStatus(204);
    });
  }
};

module.exports = CampsController;
