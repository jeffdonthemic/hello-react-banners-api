var express = require('express');
var router = express.Router();
var _ = require('lodash');
var Banner = require('../models/banner');

/* GET all banners */
router.get('/', function(req, res) {
  Banner.find({}, function(err, banners) {
    if (err)
      res.status(500).json(err);
    res.json(banners);
  })
});

/* POST create banner */
router.post('/', function(req, res) {
  var banner = new Banner(req.body);
  banner.save(function(err, banner) {
    if (err)
      res.send(err);
    res.json(banner);
  });
});

/* PUT update a banner by id */
router.put('/:id', function(req, res) {
  Banner.findById(req.params.id, function (err, banner) {
    if (err) {
      res.send(err);
    } else {
      // assign submitted properties to object for updates
      _.extend(banner, req.body);
      banner.save(function(err, banner) {
        if (err)
          res.send(err);
        res.json(banner);
      });
    }
  });
});

/* GET banner by id */
router.get('/:id', function(req, res) {
  Banner.findById(req.params.id, function (err, banner) {
    if (err)
      res.send(err);
    res.json(banner);
  });
});

module.exports = router;
