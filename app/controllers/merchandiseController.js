var express = require('express'),
  router = express.Router(),
  Merchandise = require('../models/merchandise');

router.get('/merchandises', function(req, res) {
  console.log("insdie merchandise function");
  var page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  Merchandise.find()
    .sort('name')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, merchandises) {
      if (err) {
        throw err;
      }
      Merchandise.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          merchandises: merchandises
        });
      });
    });
});

module.exports = router;
