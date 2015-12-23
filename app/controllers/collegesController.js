var express = require('express'),
  router = express.Router(),
  College = require('../models/college');

router.get('/colleges', function(req, res) {
  College.find()
    .sort('name')
    .skip((req.query.page - 1 || 0) * 2)
    .limit(req.query.pageSize || 10)
    .exec(function(err, colleges) {
      if (err) {
        throw err;
      }
      College.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          colleges: colleges
        });
      });
    });
});

router.get('/colleges/:id', function(req, res) {
  College.findById(req.params.id, function(err, college) {
    if (err) {
      throw err;
    }
    res.json(college);
  });
});

router.post('/colleges', function(req, res) {
  var college = new College(req.body);

  college.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/colleges/:id', function(req, res) {
  College.findByIdAndUpdate(req.params.id, req.body, function(err, college) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
