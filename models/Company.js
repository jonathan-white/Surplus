var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create article schema
var CompanySchema = new Schema({
	name: {type: String, unique: true},
	description: String,
	CEO: String,
	industry: String,
	products: [
	    {
	      type: Schema.Types.ObjectId,
	      ref: "Product"
	    }
	],
});

var Company = mongoose.model('Company', CompanySchema);

module.exports = Company;