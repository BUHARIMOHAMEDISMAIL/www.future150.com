var express = require('express'),
  router = express.Router(),
  MessageBoardThread = require('../models/messageBoardThread');

router.get('/messageBoardThreads', function(req, res) {
  var page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  MessageBoardThread.find()
    .sort('title')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, messageBoardThreads) {
      if (err) {
        throw err;
      }
      MessageBoardThread.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          messageBoardThreads: messageBoardThreads
        });
      });
    });
});

router.get('/messageBoardThreads/:id([0-9a-f]{24})', function(req, res) {
  MessageBoardThread.findById(req.params.id, function(err, messageBoardThread) {
    if (err) {
      throw err;
    }
    res.json(messageBoardThread);
  });
});

router.get('/messageBoardThreads/:slug', function(req, res) {
  MessageBoardThread.findOne({ slug: req.params.slug }, function(err, messageBoardThread) {
    if (err) {
      throw err;
    }
    res.json(messageBoardThread);
  });
});

router.post('/messageBoardThreads', function(req, res) {
  var messageBoardThread = new MessageBoardThread(req.body);

  messageBoardThread.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/messageBoardThreads/:id', function(req, res) {
  MessageBoardThread.findByIdAndUpdate(req.params.id, req.body, function(err, messageBoardThread) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
