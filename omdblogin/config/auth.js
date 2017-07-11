var passport = require('passport');
var expressSession = require('express-session');
var User = require('../public/Modelos/User');
var LocalStrategy = require('passport-local');


function configurePassport(app) {
	/*  =========================
	    PASSPORT CONFIG
	=========================*/
	// Acá configuramos la persistencia de las sesiones
	// express levanta una mini bd en memoria para guardar
	// datos de sesiones
	app.use(expressSession({
	  secret: 'string secreta',
	  resave: true,
	  saveUninitialized: true,
	}));

	app.use(passport.initialize());
	app.use(passport.session());

	// Todas estas funciones nos las da el plugin de Mongoose
	// Acá las conectamos con Passport
	passport.use(new LocalStrategy(User.authenticate())); // Aca creamos la estragegia
	// La funcion authenticate() devuelve datos del usuario si es un usuario autenticado y false si no.
	passport.serializeUser(User.serializeUser()); // Función que guarda los datos en la db de sesiones.
	passport.deserializeUser(User.deserializeUser());
	// Función que recupera los datos de la db de sesiones.

};


module.exports= configurePassport
