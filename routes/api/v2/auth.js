'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../../../lib/config');

var Usuario = mongoose.model('Usuario');


router.use(function(req, res, next) {
    if (req.originalUrl === '/api/v2/usuarios') {
      return next();
    } else if (req.originalUrl === '/api/v2/authenticate') {
      return next();
    } else {
      const token = req.query.token || req.headers['x-access-token'];
      jwt.verify(token, config.jwt.secret, (err, decoded) => {
          if (err) {
            return next(new Error('INVALID_TOKEN'));
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
          return next(err);
        }
        var token = jwt.sign(usuario,config.jwt.secret, {
            expiresIn: config.jwt.expiresInMinutes,
          });
        res.setHeader('x-access-token', token);
        res.json({success: true, data: token });
      });
  });

module.exports = router;
