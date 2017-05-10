'use strict';

require('../bin/install_db');
const async = require('async');
const mongoose = require('mongoose');

async.series({
    borrarTablaUsuarios: (cb) => {
        cb(null, 'OK');
      },
    borrarTablaAnuncios: (cb) => {
        cb(null, 'OK');
      },
    cargarAnuncios: (cb) => {
        cb(null, 'OK');
      },
    crearUsuario: (cb) => {
        cb(null, 'NO-OK');
      },
  }, (err, results) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    consolify(results);
    process.exit(0);
  });

function consolify(data) {
  const keys = Object.keys(data);
  let color = '';
  for (var i = 0; i < keys.length; i++) {
    if (data[keys[i]] === 'OK') {
      console.log(keys[i],' [','\x1b[32m',data[keys[i]],'\x1b[0m',']');
    } else {
      console.log(keys[i],' [','\x1b[31m',data[keys[i]],'\x1b[0m',']');
    }
  }
}
