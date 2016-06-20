var express = require('express'),
  router = express.Router(),
  Alumni = require('../models/alumni');

router.get('/Alumni', function(req, res) {
  var page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  Alumni.find()
    .sort('name')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, alumni) {
      if (err) {
        throw err;
      }
      Alumni.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          Alumni: Alumni
        });
      });
    });
});

router.get('/alumni/:id([0-9a-f]{24})', function(req, res) {
  alumni.findById(req.params.id, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.json(Alumni);
  });
});

router.get('/alumni/:legacyId([0-9]+)', function(req, res) {
  Alumni.findOne({ legacyId: req.params.legacyId }, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.json(Alumni);
  });
});

router.get('/alumni/:slug', function(req, res) {
  Alumni.findOne({ slug: req.params.slug }, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.json(alumni);
  });
});

router.post('/alumni', function(req, res) {
  var Alumni = new Alumni(req.body);

  Alumni.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/alumni/:id', function(req, res) {
  Alumni.findByIdAndUpdate(req.params.id, req.body, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;