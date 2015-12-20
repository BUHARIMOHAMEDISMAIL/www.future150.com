var Contact = require('../models/contact');

module.exports = function(app) {
  app.get('/contacts', function(req, res) {
    Contact.find({}, function(err, contacts) {
      if (err) {
        throw err;
      }
      res.json({
        contacts: contacts
      });
    });
  });
};
