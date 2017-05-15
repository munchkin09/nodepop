'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../../../lib/config');

var Usuario = mongoose.model('Usuario');


router.use(function(req, res, next) {
    if (req.originalUrl === '/api/v2/usuarios') {
      console.log('hola holita');
      return next();
    } else if (req.originalUrl === '/api/v2/authenticate') {
      return next();
    } else {
      console.log('buenas4444444!');
      const token = req.query.token || req.headers['x-access-token'];
      jwt.verify(token, config.jwt.secret, (err, decoded) => {
          if (err) {
            return next(err);
          }
          return next();
        });
    }
  });

router.post('/authenticate', function(req, res, next) {
    const loginData = { email: req.body.email, clave: req.body.clave }
    Usuario.validarUsuarioYPass(loginData, (err, usuario) => {
        if (err) {
          res.status(404);
          res.json({success: false, data: { prueba: 'ooeoe' } });
          return;
        }
        var token = jwt.sign(usuario,config.jwt.secret, {
            expiresIn: config.jwt.expiresInMinutes,
          });
        res.setHeader('x-access-token', token);
        res.json({success: true, data: token });
      });
  });

module.exports = router;
