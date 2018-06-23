var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	title: {type: String, unique: true},
	description: String,
	weight: Number,
	weightScale: String,
	quantity: Number,
	rating: Number,
	price: Number,
	inStock: Boolean,
	dateAdded: Date,
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;