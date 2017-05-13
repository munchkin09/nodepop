'use strict';

var mongoose = require('mongoose');
const sha = require('sha256');

const usuarioSchema = mongoose.Schema({
    nombre: String,
    email: String,
    clave: String,
  });

usuarioSchema.statics.borrarUsuarios = function(cb) {
  Usuario.remove({},cb);
}

usuarioSchema.statics.insertarUsuario = function(data, cb) {
  const pass = sha(data.clave);
  data.clave = pass;
  new Usuario(data).save(cb);
}

usuarioSchema.statics.validarUsuarioYPass = function(data, cb) {
  const login = { email: data.email, clave: sha(data.clave) }
  Usuario.findOne(login, (err, data) => {
    if (err) {
      cb(err, null);
    }
    cb(null, data);
  });
}

var Usuario = mongoose.model('Usuario', usuarioSchema);

// Mmodule.exports = Usuario;
