var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var AccountSchema = new Schema({
	userId: String,
	name: {type: String, unique: true, required: true},
	description: String,
	email: {type: String, match: /.+\@.+\..+/, unique: true},
	phone: String,
	dateJoined: { type: Date, default: Date.now },
	industry: String,
	rating: {type: Number, default: 0},
	itemsSold: {type: Number, default: 0},
	products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	]
});

var Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
