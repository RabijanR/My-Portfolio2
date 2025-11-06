// Import required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Import route handlers
var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');

var app = express();

// ----------------------
// View Engine Setup
// ----------------------
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// ----------------------
// Middleware Setup
// ----------------------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// ----------------------
// Static File Setup
// ----------------------
app.use(express.static(path.join(__dirname, '../public')));

// Serve Bootstrap, jQuery, and Font Awesome from node_modules
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap')));
app.use('/jquery', express.static(path.join(__dirname, '../node_modules/jquery')));
app.use('/@fortawesome', express.static(path.join(__dirname, '../node_modules/@fortawesome')));

// ----------------------
// Routes Setup
// ----------------------
app.use('/', indexRouter);
app.use('/users', usersRouter);

// ----------------------
// Catch 404 and Forward to Error Handler
// ----------------------
app.use(function(req, res, next) {
  next(createError(404));
});

// ----------------------
// Error Handler
// ----------------------
app.use(function(err, req, res, next) {
  // Provide error message only in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Export app module
module.exports = app;
