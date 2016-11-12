var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Shrimp = require('../models/Shrimp.js');


/* GET /shrimps listing. */
router.get('/', function(req, res, next) {
  Shrimp.find(function (err, shrimps) {
    if (err) return next(err);
    res.json(shrimps);
  });
});

/* POST /shrimps */
router.post('/', function(req, res, next) {
  Shrimp.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /shrimps/ID */
router.get('/:ID', function(req, res, next) {
  Shrimp.find({ID: req.params.ID}, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /shrimps/:ID */
router.put('/:ID', function(req, res, next) {
  Shrimp.findAndUpdate({ID: req.params.ID}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /shrimps/:ID */
router.delete('/:ID', function(req, res, next) {
  Shrimp.findAndRemove({ID: req.params.ID}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;