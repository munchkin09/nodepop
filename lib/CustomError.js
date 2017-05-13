'use strict';

module.exports = (err, req, res, next) => {
    //console.log(req.acceptsLanguages());
    if (req.acceptsLanguages() == 'es' || req.acceptsLanguages() == 'es-ES') {

    } else {

    }
    // Cconsole.log('Soy el nuevo chico de los errores!');
    // Cconsole.log(err);
    next(err, req, res);
  }
