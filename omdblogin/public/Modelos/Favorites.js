var mongoose = require('mongoose')

var FavoritesSchema = new mongoose.Schema({
	img: { type: String },
	name : { type: String},
	year: { type: String},
	director: { type:String }
}); 


var favorites = mongoose.model('favorites', FavoritesSchema);

module.exports = favorites