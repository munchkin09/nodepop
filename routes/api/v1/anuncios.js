var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Anuncio = mongoose.model('Anuncio');

/* GET de el listado completo de anuncios, sin filtro. */
router.get('/', function(req, res, next) {
  Anuncio.find().exec((err, list) => {
    if (err) {
      return next(err);
    }
    res.json({ success: true, data: list})
  });
});

module.exports = router;