var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var AccountSchema = new Schema({
	userId: String,
	name: {type: String, unique: true, required: true},
	description: String,
	email: {type: String, match: /.+\@.+\..+/, unique: true},
	phone: String,
	dateJoined: { type: Date, default: Date.now },
	industry: String,
	rating: Number,
	itemsSold: {type: Number, default: 0},
	itemsPurchased: {type: Number, default: 0},
	hasProducts: {type: Boolean, default: false},
	products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	]
});

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
