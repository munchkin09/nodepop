'use strict';

module.exports = (err, req, res, next) => {
    //console.log(req.acceptsLanguages());
    if (req.acceptsLanguages() == 'es' || req.acceptsLanguages() == 'es-ES') {
      console.log('Estoy pasando por Español');
      
    } else {
      console.log('Estoy pasando por Inglés');
    }
    // Cconsole.log('Soy el nuevo chico de los errores!');
    console.log(err);
    next(err);
  }
