var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Anuncio = mongoose.model('Anuncio');

/* GET de el listado completo de anuncios, CON filtro. */
router.get('/', function(req, res, next) {
  Anuncio.findWithFilters(req.query, (err, data) => {
    if (err) {
      console.log(err);
      return next();
    }
    if (data.length === 0) {
      return next(new Error('INVALID_CRITERIA'));
    }
    res.json({ success: true, data: data});
  });
});

router.get('/tags', function(req, res, next) {
  Anuncio.distinct('tags',(err, data) => {
    if (err) {
      return next(err);
    }
    res.json({success: true, data: data});
  });
});

module.exports = router;