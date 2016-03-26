var express = require('express'),
  router = express.Router(),
  Product = require('../models/product');

router.get('/products', function(req, res) {
  var page = (req.query.page - 1) || 0,
    pageSize = req.query.pageSize || 10;
  Product.find()
    .sort('name')
    .skip(page * pageSize)
    .limit(pageSize)
    .exec(function(err, products) {
      if (err) {
        throw err;
      }
      Product.count().exec(function(err, count) {
        if (err) {
          throw err;
        }
        res.json({
          count: count,
          products: products
        });
      });
    });
});

router.get('/products/:id([0-9a-f]{24})', function(req, res) {
  Product.findById(req.params.id, function(err, product) {
    if (err) {
      throw err;
    }
    res.json(product);
  });
});

router.get('/products/:slug', function(req, res) {
  Product.findOne({ slug: req.params.slug }, function(err, product) {
    if (err) {
      throw err;
    }
    res.json(product);
  });
});

router.post('/products', function(req, res) {
  var product = new Product(req.body);

  product.save(function(err) {
    if (err) {
      throw err;
    }
    res.sendStatus(201);
  });
});

router.put('/products/:id', function(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body, function(err, product) {
    if (err) {
      throw err;
    }
    res.sendStatus(204);
  });
});

module.exports = router;
