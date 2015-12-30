var jwt = require('jsonwebtoken');

module.exports = function() {
  return function(req, res, next) {
    var authorizationHeader = req.headers.authorization,
      token = authorizationHeader.replace('Bearer ', ''),
      isAuthenticated = token && jwt.verify(token, 'WRhHeSQgRGdrmnGZ');

    if (isAuthenticated) {
      req.user = jwt.verify(token, 'WRhHeSQgRGdrmnGZ');
      return next();
    }
    else {
      res.status(401).send('Unauthorized');
    }
  };
};
