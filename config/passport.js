var passport = require('passport'),
  JwtStrategy = require('passport-jwt').Strategy;

module.exports = function() {
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

  var options = {
    secretOrKey: 'WRhHeSQgRGdrmnGZ',
    issuer: 'future150.com',
    audience: 'future150.com'
  };
  passport.use(new JwtStrategy(options, function(jwt_payload, done) {
    done(null, {});
  }));
}
