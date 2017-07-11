var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose'); // Plugin para tener las funciones de passport en mi modelo
var favorites = require('./Favorites')

var UserSchema = new mongoose.Schema({
	    favorites: [{
    	type: mongoose.Schema.Types.ObjectId,
      	ref:'favorites' 
    }]
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', UserSchema);


module.exports = User;


