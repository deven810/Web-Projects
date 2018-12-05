var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const assert = require('assert');
var jwt = require('jsonwebtoken');

var indexRouter = require('./routes/index');
var blogRouter = require('./routes/blog');
var loginRouter = require('./routes/login');
var apiRouter = require('./routes/api');
// var editorRouter = require('./routes/editor');
const secret = "C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c"

let client;
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.get('/*', (req, res) => {
    //   let user = req.
    //   if (isValidUser(req.cookies, user)) {
        
        //   }
        // })
        // console.log("bitch")

app.all('/editor', (req, res, next) => {
    let ye = isValidCookie(req.cookies);
    console.log(ye)
    if (ye) {
        console.log("bitch")
        console.log(req.url);
        console.log(req.cookies);
        next()
        // res.redirect(req.url);

    } else {
        console.log(req.url);
        // console.log(req.cookies);
        res.redirect('/login?redirect=/editor/');
    }
}, express.static(path.join(__dirname, 'public')));
        

// app.use('/editor', editorRouter);
app.use('/', indexRouter);
app.use('/blog', blogRouter);
app.use('/login', loginRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

function isValidCookie(cookie) {
    try {
        console.log(cookie.jwt);
        cookie = jwt.verify(cookie.jwt, secret)
        if (cookie.exp < (Date.now()/1000)) {
            console.log("yeah")
            return false; 
        } 
        return true; 
    }
    catch (err) {
            console.log("here")
            console.log(err)
            return false;
    }
}

module.exports = { app: app, db: client };
 