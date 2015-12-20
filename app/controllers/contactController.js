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
  app.get('/contacts/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err) {
        throw err;
      }
      res.json(contact);
    });
  });
  app.post('/contacts', function(req, res) {
    var contact = new Contact();
    contact.firstName = req.body.firstName;

    contact.save(function(err) {
      if (err) {
        throw err;
      }
      res.sendStatus(201);
    });
  });
  app.put('/contacts/:id', function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err) {
        throw err;
      }
      contact.firstName = req.body.firstName;

      contact.save(function(err) {
        if (err) {
          throw err;
        }
        res.sendStatus(204);
      });
    });
  });
};
