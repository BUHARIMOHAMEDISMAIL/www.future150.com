var express = require('express'),
  router = express.Router(),
  Player = require('../models/player');

router.get('/players', function(req, res) {
  var filter = {},
    page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  if (req.query.q) {
    filter = {
      $or: [
        { firstName: { $regex: req.query.q, $options: '-i' } },
        { lastName: { $regex: req.query.q, $options: '-i' } }
      ]
    };
  }
  Player.find(filter)
    .sort('lastName')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, players) {
      if (err) {
        throw err;
      }
      Player.count(filter).exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          players: players
        });
      });
    });
});

router.get('/players/trending', function(req, res) {
  Player.find()
    .sort('lastName')
    .limit(req.query.pageSize || 4)
    .exec(function(err, players) {
      if (err) {
        throw err;
      }
      res.json(players);
    });
});

router.get('/players/:id([0-9a-f]{24})', function(req, res) {
  Player.findById(req.params.id)
    .populate('colleges.college')
    .exec(function(err, player) {
      if (err) {
        throw err;
      }
      res.json(player);
    });
});

router.get('/players/:legacyId([0-9]+)', function(req, res) {
  Player.findOne({ legacyId: req.params.legacyId }, function(err, player) {
    if (err) {
      throw err;
    }
    res.json(player);
  });
});

router.get('/players/:slug', function(req, res) {
  Player.findOne({ slug: req.params.slug }, function(err, player) {
    if (err) {
      throw err;
    }
    res.json(player);
  });
});

router.post('/players', function(req, res) {
  var player = new Player(req.body);

  player.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/players/:id', function(req, res) {
  Player.findByIdAndUpdate(req.params.id, req.body, function(err, player) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
