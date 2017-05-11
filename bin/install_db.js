'use strict';

// Cargamos los modelos
require('../models/Anuncio');
require('../models/Usuario');

// Cargamos módulos que vamos a necesitar en la instalación
const sha = require('sha256');
const mongoose = require('mongoose');
const Anuncio = mongoose.model('Anuncio');
const Usuario = mongoose.model('Usuario');
const fs = require('fs');
const json = JSON.parse(fs.readFileSync('bin/anuncios.json',{ encoding: 'utf-8'}));

const db = mongoose.connection;

db.on('error', (err) => {
    console.log(err);
  });


db.once('open', () => {
    console.log('<------------------>');
    console.log('Conectado a mongodb');
  });

mongoose.connect('mongodb://localhost/nodepop',(err)=> {
  if (err) {
    console.log(err);
    return;
  }
  Anuncio.remove({}, (err, algo) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Borrado de anuncios completado');
    Usuario.remove({}, (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('Borrado de usuarios completado');
      Anuncio.insertMany(json.anuncios,(err,algo) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log('Inserción de anuncios de prueba realizado con éxito');
        let pass = sha('hinkliminkli');
        Usuario.create({ nombre: 'Carlos', email: 'clc@clc.es', clave: pass},(err, usuario) => {
          if (err) {
            console.log(err);
          }
          console.log('Usuario de prueba insertado con éxito');
          mongoose.connection.close();
          process.exit(0);
        })
      });
    });
  });
});
