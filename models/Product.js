var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	title: {type: String, required: true},
	description: String,
	price: {type: Number, default: 0.00},
	quantity: Number,
	img_local: String,
	img_cloud: String,
	weight: Number,
	unitOfMeasure: String,
	rating: Number,
	inStock: {type: Boolean, default: true},
	dateAdded: { type: Date, default: Date.now },
	userId: String,
});

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
