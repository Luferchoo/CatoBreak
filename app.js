var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth.router');
var usersRouter = require('./routes/users.router');
var capitulo_aRouter = require('./routes/capitulo_a.router');
var capitulo_bRouter = require('./routes/capitulo_b.router');
var capitulo_cRouter = require('./routes/capitulo_c.router');
var capitulo_dRouter = require('./routes/capitulo_d.router');
var capitulo_eRouter = require('./routes/capitulo_e.router');
var capitulo_fRouter = require('./routes/capitulo_f.router');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true, UseUnifiedTopology: true});

const connection = mongoose.connection;

connection.on('error', () =>{
  console.log('Error connection to database');
});

connection.once('open', () =>{
  console.log('Connected to Database.....');
});

app.use('/', indexRouter);
//app.use('/auth', authRouter);
app.use('/api/users', usersRouter);
app.use('/api/capitulo_a', capitulo_aRouter);
app.use('/api/capitulo_b', capitulo_bRouter);
app.use('/api/capitulo_c', capitulo_cRouter);
app.use('/api/capitulo_d', capitulo_dRouter);
app.use('/api/capitulo_e', capitulo_eRouter);
app.use('/api/capitulo_f', capitulo_fRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'the endpoint does not exist'));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    errorcode: err.status || 500,
    message: res.locals.message
  });
});

module.exports = app;
