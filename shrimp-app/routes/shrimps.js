var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Shrimp = require('../models/Shrimp.js');

var PythonShell = require('python-shell');


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

/* PUT /shrimps STOP motor */
router.put('/', function(req, res, next) {
  var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3',
    pythonOptions: ['-u'],
    args: ['0', '0', '0']
  };
  PythonShell.run('ModbusControlhrimp.py', options, function (err, results) {
    if (err) return next(err);
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
  console.log("Receive PUT: STOP MOTOR");
  res.json(req.body);
});

/* Delete /shrimps delete all */
router.delete('/', function(req, res, next) {
  Shrimp.remove(function (err, shrimps) {
    if (err) return next(err);
    res.json(shrimps);
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
  Shrimp.find({ID: req.params.ID}, function (err, post) {
    console.log("Receive PUT - ID="+req.params.ID);
    if (err) return next(err);
    var options = {
    mode: 'text',
    pythonPath: '/usr/bin/python3',
    pythonOptions: ['-u'],
    args: [post[0].Motor1, post[0].Motor2, post[0].Motor3]
  };
  //console.log(post);
  //console.log([post[0].Motor1, post[0].Motor2, post[0].Motor3]);
  PythonShell.run('ModbusControlhrimp.py', options, function (err, results) {
    if (err) return next(err);
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });

    res.json(post);
    //console.log("Receive PUT:"+post);
  });
});

/* DELETE /shrimps/:ID */
router.delete('/:ID', function(req, res, next) {
  Shrimp.findOneAndRemove({ID: req.params.ID}, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
