'use strict';

let mongoose = require('mongoose');

let anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String],
    creado: { type: Date, default: Date.now},
  });

mongoose.model('Anuncio', anuncioSchema);

