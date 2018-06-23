var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var UserSchema = new Schema({
	name: {type: String, unique: true},
	description: String,
	CEO: String,
	industry: String,
	rating: Number,
	responseTime: String,
	itemsSold: Number,
	hasProducts: Boolean,
	products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	],
});

var User = mongoose.model('User', UserSchema);

module.exports = User;