var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario');

/* GET listado de usuarios. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST añadir un usuario
router.post('/', function(req, res, next) {
  let data = { nombre: req.body.nombre, email: req.body.email, clave: req.body.clave};
  Usuario.insertarUsuario(data,(err, usuario) => {
          if (err) {
            return next(err);
          }
          return res.json({ success: true, data: usuario});
        });
});

module.exports = router;
