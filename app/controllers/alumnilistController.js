var express = require('express'),
router = express.Router(),
Alumni = require('../models/alumnilist');
router.get('/alumnilists', function(req, res) {
console.log("insdie alumni function");
var page = (req.query.page - 1) || 0,
pageSize = req.query.pageSize || 10;
Alumni.find()
.sort('name')
.skip(page * pageSize)
.limit(pageSize)
.exec(function(err, alumnilists) {
if (err) {
throw err;
}
Alumni.count().exec(function(err, count) {
if (err) {
throw err;
}
res.json({
count: count,
alumnilists: alumnilists
});
});
});
});
router.get('/alumnilists/:id([0-9a-f]{24})', function(req, res) {
Alumni.findById(req.params.id, function(err, conts) {
if (err) {
throw err;
}
res.json(conts);
});
});
router.get('/alumnilists/:class', function(req, res) {
Alumni.findOne({ class: req.params.class }, function(err, alumnilists) {
if (err) {
throw err;
}
res.json(alumnilists);
});
});
router.put('/alumnilists/:id', function(req, res) {
Alumni.findByIdAndUpdate(req.params.id, req.body, function(err, alumnilists) {
if (err) {
throw err;
}
res.sendStatus(204);
});
});
router.post('/alumnilists', function(req, res) {
var alumni = new Alumni(req.body);
alumni.save(function(err) {
if (err) {
throw err;
}
res.sendStatus(201);
});
});
module.exports = router;
