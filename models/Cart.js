var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var CartSchema = new Schema({
  sessionID: String,
  products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product",
        quantity: 0,
	    }
	],
  subtotal: Number,
  savings: Number,
  shipping: Number,
  total: Number,
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
