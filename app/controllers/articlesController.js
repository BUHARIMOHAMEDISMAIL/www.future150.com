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

module.exports = router;
