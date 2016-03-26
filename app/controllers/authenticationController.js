var express = require('express'),
  jwt = require('jsonwebtoken'),
  authenticate = require('../middleware/authenticate'),
  authenticationConfig = require('../../config/authentication'),
  User = require('../models/user'),
  router = express.Router();

router.post('/token', function(req, res) {
  User.findOne({ username: req.body.username }, function(err, user) {
    if (err) {
      throw err;
    }
    if (!user) {
      res.status(401).send('Unauthorized');
    }
    else {
      res.json({
        token: jwt.sign(user.toObject(), authenticationConfig.secret)
      });
    }
  });
});

router.post('/register', function(req, res) {
  var user = new User(req.body);

  user.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.get('/profile', authenticate(), function(req, res) {
  User.findById(req.user._id, function(err, user) {
    if (err) {
      throw err;
    }
    res.json({
      user: user
    });
  });
});

module.exports = router;
