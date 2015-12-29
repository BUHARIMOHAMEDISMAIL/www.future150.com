module.exports = function() {
  return function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    else {
      res.send(401, 'Unauthorized');
    }
  };
};
