var jwt = require('jsonwebtoken'),
  authenticationConfig = require('../../config/authentication');

module.exports = function() {
  return function(req, res, next) {
    var authorizationHeader = req.headers.authorization,
      token = authorizationHeader.replace('Bearer ', ''),
      isAuthenticated = token && jwt.verify(token, authenticationConfig.secret);

    if (isAuthenticated) {
      req.user = jwt.verify(token, authenticationConfig.secret);
      return next();
    }
    else {
      res.status(401).send('Unauthorized');
    }
  };
};
