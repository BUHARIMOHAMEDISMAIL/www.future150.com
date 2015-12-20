var express = require('express'),
  router = express.Router(),
  Contact = require('../models/contact');

router.route('/contacts')
  .get(function(req, res) {
    Contact.find({}, function(err, contacts) {
      if (err) {
        throw err;
      }
      res.json({
        contacts: contacts
      });
    });
  })
  .post(function(req, res) {
    var contact = new Contact(req.body);

    contact.save(function(err) {
      if (err) {
        throw err;
      }
      res.sendStatus(201);
    });
  });

router.route('/contacts/:id')
  .get(function(req, res) {
    Contact.findById(req.params.id, function(err, contact) {
      if (err) {
        throw err;
      }
      res.json(contact);
    });
  })
  .put(function(req, res) {
    Contact.findByIdAndUpdate(req.params.id, req.body, function(err, contact) {
      if (err) {
        throw err;
      }
      res.sendStatus(204);
    });
  });

module.exports = router;
