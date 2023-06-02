var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var user = require("./controller/test")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var us=require('./controller/getupdateUser')

var app = express();
var Port=9001 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json({ limit: "100mb" }));

app.use('/', indexRouter);
app.use('/users', user.getAll);



app.listen(Port,()=> console.log(`Server is listening to port ${Port}`))


module.exports = app;
