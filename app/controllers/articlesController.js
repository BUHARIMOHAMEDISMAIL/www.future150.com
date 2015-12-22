var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

router.get('/articles', function(req, res) {
  Article.find()
    .sort('title')
    .skip((req.query.page - 1 || 0) * 2)
    .limit(req.query.pageSize || 10)
    .exec(function(err, articles) {
      if (err) {
        throw err;
      }
      Article.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          articles: articles
        });
      });
    });
});

router.get('/articles/:id([0-9a-f]{24})', function(req, res) {
  Article.findById(req.params.id, function(err, article) {
    if (err) {
      throw err;
    }
    res.json(article);
  });
});

router.get('/articles/:slug', function(req, res) {
  Article.findOne({ slug: req.params.slug }, function(err, article) {
    if (err) {
      throw err;
    }
    res.json(article);
  });
});

router.post('/articles', function(req, res) {
  var article = new Article(req.body);

  article.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/articles/:id', function(req, res) {
  Article.findByIdAndUpdate(req.params.id, req.body, function(err, article) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
