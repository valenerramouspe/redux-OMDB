var express = require('express');
var app = express();
var passport = require('passport');
var LocalStrategy = require('passport-local'); // Estrategia local de express
var mongoose = require('mongoose');
var expressSession = require('express-session'); // Mini db en memoria para guardar sesiones
var User = require('./public/Modelos/User');  // El modelo de usuarios
var bodyParser = require('body-parser');
const configurePassport = require("./config/auth");
const crossOrigin = require('./config/crossorigin');
var cookieParser = require('cookie-parser');

mongoose.connect('mongodb://mongo/autenticacion');
app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(crossOrigin)

var urlParser = bodyParser.urlencoded({ extended:true });

app.use(bodyParser.json());
app.use(urlParser);

configurePassport(app);

// RUTAS

app.get('/test', function(req, res) {
    res.send('test');
});

app.get('/', function(req, res) {
    res.sendFile('C:/Users/Valen/Desktop/Bootcamp/Semana 6/Lunes/Redux OMDB/dist/index.html');
});

app.get('/index_bundle', function(req, res) {
    res.sendFile('C:/Users/Valen/Desktop/Bootcamp/Semana 6/Lunes/Redux OMDB/dist/index_bundle.js');
});

// Formulario de login
app.get('/login', function(req, res) {
  res.render('login');
});
// Procesa el login, usamos authenticate de passport como middleware.
app.post('/login', passport.authenticate('local'), function(req, res) {
  if (req.isAuthenticated()) {
    res.send({username: req.user.username});
  } else {
    res.send({username: null});
  }
});

// Registro de un usuario
app.get('/register', function (req, res) {
  res.render('register');
});

// Procesa el registro,
app.post('/register', function (req, res) {
  console.log('BODY',req.body);
  var newUser = new User({ username: req.body.username });
  User.register(newUser, req.body.password, function (err, user) {
    if (err) {
      console.log(err);
      return res.send(err);
    }
    console.log('useeer',user)
    res.send({usuario:user.username});
  });
});

// Logout

app.get('/logout', function(req, res){
  req.logout();
  res.send('Deslogeado');
});

// Middleware
// Si está autenticado, que siga, si no respondemos que no puede pasar.
// Usamos la función req.isAuthenticated() de Passport.
function isLoggedIn(req, res, next) {
  console.log('cookies', req.cookies)
  console.log("in is logged in", req.user, req.isAuthenticated())
  if (req.isAuthenticated()) {
    return next(); // puede pasar
  }
  return res.send({
    isLogged: false,
    favorites: null,
    err: 'Not Logged In'
  });
}

// Publica
app.get('/publica', function(req, res) {
  res.render('publica');
});

// Privada
// Usamos el middleware que creamos arriba
app.get('/privada', isLoggedIn, function(req, res) {
  console.log('USER', req.user)
  res.send({
    isLogged: true,
    favorites: req.user.favorites,
    err: null
  });
});

app.post('/addfav', isLoggedIn, function(req, res){
  User.findByIdAndUpdate(req.user._id,{ $push: {favorites: req.body}}, function(err, user){
    if(err){
      res.send({err: err, favorites: null})
    }
    res.send({favorites: user.favorites, err: null})
  })
})



module.exports = app
