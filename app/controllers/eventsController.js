var express = require('express'),
  router = express.Router(),
  Event = require('../models/event');

router.get('/events', function(req, res) {
  var filter = {},
    page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  if (req.query.eventType) {
    filter.type = req.query.eventType;
  }
  Event.find(filter)
    .sort('title')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, events) {
      if (err) {
        throw err;
      }
      Event.count(filter).exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          events: events
        });
      });
    });
});

router.get('/events/:id([0-9a-f]{24})', function(req, res) {
  Event.findById(req.params.id, function(err, event) {
    if (err) {
      throw err;
    }
    res.json(event);
  });
});

router.get('/events/:slug', function(req, res) {
  Event.findOne({ slug: req.params.slug }, function(err, event) {
    if (err) {
      throw err;
    }
    res.json(event);
  });
});

router.post('/events', function(req, res) {
  var event = new Event(req.body);

  event.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/events/:id', function(req, res) {
  Event.findByIdAndUpdate(req.params.id, req.body, function(err, event) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
