var express = require('express'),
  router = express.Router(),
  Video = require('../models/video');

router.get('/videos', function(req, res) {
  Video.find()
    .sort('title')
    .skip((req.query.page - 1 || 0) * 2)
    .limit(req.query.pageSize || 10)
    .exec(function(err, videos) {
      if (err) {
        throw err;
      }
      Video.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          videos: videos
        });
      });
    });
});

router.get('/videos/:id', function(req, res) {
  Video.findById(req.params.id, function(err, video) {
    if (err) {
      throw err;
    }
    res.json(video);
  });
});

router.post('/videos', function(req, res) {
  var video = new Video(req.body);

  video.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/videos/:id', function(req, res) {
  Video.findByIdAndUpdate(req.params.id, req.body, function(err, video) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
