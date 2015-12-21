var express = require('express'),
  router = express.Router(),
  Contact = require('../models/contact');

router.get('/contacts', function(req, res) {
  Contact.find()
    .sort('lastName')
    .skip((req.query.page - 1 || 0) * 2)
    .limit(req.query.pageSize || 10)
    .exec(function(err, contacts) {
      if (err) {
        throw err;
      }
      Contact.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          contacts: contacts
        });
      });
    });
});

router.get('/contacts/:id', function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      throw err;
    }
    res.json(contact);
  });
});

router.post('/contacts', function(req, res) {
  var contact = new Contact(req.body);

  contact.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/contacts/:id', function(req, res) {
  Contact.findByIdAndUpdate(req.params.id, req.body, function(err, contact) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
