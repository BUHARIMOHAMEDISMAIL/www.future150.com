var express = require('express'),
  jwt = require('jsonwebtoken'),
  authenticate = require('../middleware/authenticate'),
  router = express.Router();

router.post('/token', function(req, res) {
  var user = req.body;
  req.login(user, function(err) {
    if (err) {
      throw err;
    }
    res.json({
      token: jwt.sign(req.user, 'WRhHeSQgRGdrmnGZ')
    });
  });
});

router.post('/register', function(req, res) {

});

router.get('/profile', authenticate(), function(req, res) {
  res.json({
    user: req.user
  });
});

module.exports = router;
