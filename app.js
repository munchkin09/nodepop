var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./models/Anuncio');
require('./models/Usuario');

var index = require('./routes/index');
var usuarios = require('./routes/api/v1/usuarios');
var anuncios = require('./routes/api/v1/anuncios');
var customError = require('./lib/CustomError');

var app = express();

// Con este require hacemos que mongoose se conecte a nuesta db de manera básica
require('./lib/connectionDb');

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/v1/usuarios', usuarios);
app.use('/api/v1/anuncios', anuncios);
app.use('/api/v2/', require('./routes/api/v2/auth'));
app.use('/api/v2/anuncios', require('./routes/api/v2/anuncios'));



// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Gestor de errores propio
// Aapp.use(customError);


// Error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  console.log(req.originalUrl);
  if (isAPI(req)) {
    res.json({ success: false, error: err.message});
    return;
  }

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.render('error');
});

module.exports = app;


function isAPI(req) {
  return req.originalUrl.indexOf('/api/v') === 0;
}
