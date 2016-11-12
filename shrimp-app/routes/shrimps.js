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

/* POST /todos */
router.post('/', function(req, res, next) {
  Shrimp.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
