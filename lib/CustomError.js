'use strict';
var config = require('./config');

module.exports = (err, req, res, next) => {
    let lang = 'en';
    if (req.acceptsLanguages() == 'es' || req.acceptsLanguages() == 'es-ES') {
      lang = 'es';
    }

    switch (err.message) {
      case 'INVALID_TOKEN': {
        err.message = config[lang].INVALID_TOKEN;
        break;
      }
      case 'INVALID_LOGIN': {
        err.message = config[lang].INVALID_LOGIN;
        break;
      }
      case 'INVALID_CRITERIA': {
        err.message = config[lang].INVALID_CRITERIA;
        break;
      }
      case 'Not Found': {
        err.message = config[lang].NOT_FOUND;
        break;
      }
      default: {
        break;
      }
    }
    /* INVALID_TOKEN
       INVALID_LOGIN
       INVALID_CRITERIA */
    next(err);
  }
