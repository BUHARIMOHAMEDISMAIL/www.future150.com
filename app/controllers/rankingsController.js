var express = require('express'),
  router = express.Router(),
  Ranking = require('../models/ranking');

router.get('/rankings/:type', function(req, res) {
  Ranking.find({ type: req.params.type })
    .year('title')
    .exec(function(err, rankings) {
      if (err) {
        throw err;
      }
      Ranking.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          rankings: rankings
        });
      });
    });
});

router.get('/rankings/:id([0-9a-f]{24})', function(req, res) {
  Ranking.findById(req.params.id, function(err, ranking) {
    if (err) {
      throw err;
    }
    res.json(ranking);
  });
});

router.post('/rankings', function(req, res) {
  var ranking = new Ranking(req.body);

  ranking.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/rankings/:id', function(req, res) {
  Ranking.findByIdAndUpdate(req.params.id, req.body, function(err, ranking) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
