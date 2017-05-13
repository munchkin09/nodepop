var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario');

/* GET lista de usuarios. */
router.get('/', function(req, res, next) {
  Usuario.find({}, 'nombre email', (err, data) => {
    if (err) {
      next(err,null);
      return;
    }
    res.json({success: true, data: data });
  });
});


module.exports = router;
