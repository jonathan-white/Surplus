var mongoose = require("mongoose");

var Schema = mongoose.Schema;

function obfuscate (cc) {
	return '****-****-****-' + cc.slice(cc.length-4, cc.length);
}

// Create article schema
var AccountSchema = new Schema({
	name: {type: String, unique: true, required: true},
	description: String,
	email: {type: String, match: /.+\@.+\..+/, unique: true},
	phone: String,
	creditCardNumber: { type: String, get: obfuscate },
	dateJoined: { type: Date, default: Date.now },
	industry: String,
	rating: Number,
	responseTime: String,
	itemsSold: {type: Number, default: 0},
	hasProducts: {type: Boolean, default: false},
	products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	],
});

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;