'use strict';

let mongoose = require('mongoose');

let anuncioSchema = mongoose.Schema({
    nombre: { type: String, index: true},
    venta: Boolean,
    precio: { type: Number, index: true},
    foto: String,
    tags: [{ type: String, index: true }],
    creado: { type: Date, default: Date.now},
  });

anuncioSchema.statics.findWithFilters = function(data, cb) {
    const filters = {};
    let arrPrecio;

    if (data.tags) {
      filters.tags = { $in: data.tags.split(' ')};
    }
    if (data.venta) {
      filters.venta = data.venta;
    }
    if (data.nombre) {
      filters.nombre = new RegExp('^' + data.nombre, 'i');
    }
    if (data.precio) {
      arrPrecio = data.precio.split('-');
      if (arrPrecio.length === 2 && arrPrecio.indexOf('') === -1) {
        filters.precio = { $gte: parseFloat(arrPrecio[0]), $lte: parseFloat(arrPrecio[1])};
      } else if (arrPrecio.length == 2) {
        if (arrPrecio[0] === '') {
          filters.precio = { $lte: parseFloat(arrPrecio[1])};
        } else {
          filters.precio = { $gte: parseFloat(arrPrecio[0])};
        }
      } else {
        filters.precio = parseFloat(arrPrecio[0]);
      }
    }
    var query = Anuncio.find(filters);
    query.skip(parseInt(data.start));
    query.limit(parseInt(data.limit));
    query.sort(data.sort);
    query.select('nombre precio foto tags creado');
    query.exec(cb);
  }

var Anuncio = mongoose.model('Anuncio', anuncioSchema);



