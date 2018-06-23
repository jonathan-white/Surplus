var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	title: {type: String, unique: true},
	description: String,
	price: Number,
	weight: Number,
	unitOfMeasure: String,
	quantity: Number,
	rating: Number,
	inStock: Boolean,
	dateAdded: { type: Date, default: Date.now },
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;