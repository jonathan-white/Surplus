var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var ProductSchema = new Schema({
	title: {type: String, required: true, index: true},
	description: {type: String, index: true},
	price: {type: Number, default: 0.00},
	quantity: Number,
	img_local: String,
	img_cloud: String,
	weight: Number,
	unitOfMeasure: String,
	rating: {type: Number, default: 0},
	inStock: {type: Boolean, default: true},
	dateAdded: { type: Date, default: Date.now },
	userId: String,
});

ProductSchema.index(
	{title: 'text', description: 'text'},{
		weights: { title: 10, description: 5 },
		name: 'TextIndex'
	}
);

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
