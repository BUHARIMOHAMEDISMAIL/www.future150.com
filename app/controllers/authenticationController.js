var express = require('express'),
  jwt = require('jsonwebtoken'),
  authenticate = require('../middleware/authenticate'),
  User = require('../models/user'),
  router = express.Router();

router.post('/token', function(req, res) {
  var user = req.body;
  res.json({
    token: jwt.sign(user, 'WRhHeSQgRGdrmnGZ')
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
  res.json({
    user: req.user
  });
});

module.exports = router;
