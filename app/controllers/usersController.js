var express = require('express'),
  router = express.Router(),
  User = require('../models/user');

router.get('/users', function(req, res) {
  User.find()
    .sort('title')
    .skip((req.query.page - 1 || 0) * 2)
    .limit(req.query.pageSize || 10)
    .exec(function(err, users) {
      if (err) {
        throw err;
      }
      User.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          users: users
        });
      });
    });
});

router.get('/users/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      throw err;
    }
    res.json(user);
  });
});

router.post('/users', function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/users/:id', function(req, res) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
