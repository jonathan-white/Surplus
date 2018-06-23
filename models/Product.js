var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	name: {type: String, unique: true},
	description: String,
	weight: Number,
	weightScale: String,
	quantity: Number,
	price: Number,
	inStock: true
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;