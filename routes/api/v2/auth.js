'use strict';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Usuario = mongoose.model('Usuario');

const jwt = require('jsonwebtoken');

const config = require('../../../lib/config');

router.post('/authenticate', function(req, res, next) {
    const loginData = { email: req.body.email, clave: req.body.clave }
    Usuario.validarUsuarioYPass(loginData, (err, usuario) => {
        console.log(err);
        console.log(usuario);
        var token = jwt.sign(usuario,config.jwt.secret, {
            expiresIn: config.jwt.expiresInMinutes,
          });
        console.log(token);
        res.json(token);
      });
    
  });

module.exports = router;
