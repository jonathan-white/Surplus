var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProductSchema = new Schema({
	title: {type: String, required: true, index: true},
	description: {type: String, index: true},
	price: {type: Number, default: 0.00},
	old_price: {type: Number, default: 0.00},
	quantity: Number,
	img_local: String,
	img_cloud: String,
	category: {type: String, default: 'General'},
	ratings: [{rating: Number, customerId: String}],
	inStock: {type: Boolean, default: true},
	dateAdded: { type: Date, default: Date.now },
	userId: String, //The account that is selling this item
	meta: {
		favs: Number
	}
});

ProductSchema.index(
	{title: 'text', description: 'text'},{
		weights: { title: 10, description: 5 },
		name: 'TextIndex'
	}
);

var Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
