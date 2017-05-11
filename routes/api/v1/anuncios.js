var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Anuncio = mongoose.model('Anuncio');

/* GET home page. */
router.get('/', function(req, res, next) {
  Anuncio.find().exec((err, list) => {
    if (err) {
      next(err);
      return;
    }
    res.json({ ok: true, list: list})
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;