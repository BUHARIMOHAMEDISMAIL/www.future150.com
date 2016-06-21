var express = require('express'),
  router = express.Router(),
  Alumni = require('../models/alumni');

router.get('/alumnies', function(req, res) {
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
          alumni: alumni
        });
      });
    });
});

router.get('/alumnies/:id([0-9a-f]{24})', function(req, res) {
  Alumni.findById(req.params.id, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.json(alumni);
  });
});

// router.get('/alumnies/:legacyId([0-9]+)', function(req, res) {
//   Alumni.findOne({ legacyId: req.params.legacyId }, function(err, alumni) {
//     if (err) {
//       throw err;
//     }
//     res.json(Alumni);
//   });
// });

router.get('/alumnies/:slug', function(req, res) {
  Alumni.findOne({ slug: req.params.slug }, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.json(alumni);
  });
});

router.post('/alumnies', function(req, res) {
  var alumni = new Alumni(req.body);

  alumni.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/alumnies/:id', function(req, res) {
  Alumni.findByIdAndUpdate(req.params.id, req.body, function(err, alumni) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;