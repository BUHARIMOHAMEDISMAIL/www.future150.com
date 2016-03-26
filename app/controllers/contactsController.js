var express = require('express'),
  router = express.Router(),
  Contact = require('../models/contact');

router.get('/contacts', function(req, res) {
  var page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  Contact.find()
    .sort('lastName')
    .skip(page * pageSize)
    .limit(pageSize)
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

router.get('/contacts/:id([0-9a-f]{24})', function(req, res) {
  Contact.findById(req.params.id, function(err, contact) {
    if (err) {
      throw err;
    }
    res.json(contact);
  });
});

router.get('/contacts/:legacyId', function(req, res) {
  Contact.findOne({ legacyId: req.params.legacyId }, function(err, contact) {
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
