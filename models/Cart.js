var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CartSchema = new Schema({
  sessionId: {type: String, unique: true, required: true},
  products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	],
  subtotalCost: {type: Number, default: 0},
  savings: {type: Number, default: 0},
  shippingCost: {type: Number, default: 0},
  totalCost: {type: Number, default: 0},
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
