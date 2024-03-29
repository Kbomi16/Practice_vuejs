var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('board', 'root', '1234', {
  host: 'localhost',
  dialect: "mysql",
  logging: false
});

var session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
var sessionStore = new MySQLStore({
  host: 'localhost',
	port: 3306,
	user: 'root',
	password: '1234',
	database: 'board'
});
app.use(session({
	key: 'loginkey',
	secret: '1234',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));


var modelInit = require("./model.js")
modelInit(Sequelize, sequelize)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../dist')));

app.use('/api', indexRouter);
app.use('/api/user', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
