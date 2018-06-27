var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	title: {type: String, unique: true, required: true},
	description: String,
	price: Number,
	weight: Number,
	unitOfMeasure: String,
	quantity: Number,
	rating: Number,
	inStock: {type: Boolean, default: true},
	dateAdded: { type: Date, default: Date.now },
	image_url: String,
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;