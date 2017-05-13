var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Anuncio = mongoose.model('Anuncio');

router.use((req, res, next) => {
  // Middleware para controlar si la petición viene autentificada o no.
  next();
});

/* GET de el listado completo de anuncios, CON filtro. */
router.get('/', function(req, res, next) {
  const filtros = {};
  Anuncio.find(filtros).exec((err, list) => {
    err = new Error('Probando cosas');
    if (err) {
      return next(err);
    }
    res.json({ ok: true, list: list})
  });
});

module.exports = router;