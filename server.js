const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
require("dotenv").config();

app.use(logger("dev"));

// Setup data parsing Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Static Public
if (process.env.NODE_ENV === "production") {
  // app.use(express.static('public'));
  app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use(routes);

// If deployed, use the deployed database. Otherwise use the local nytreact database
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/surplusDB");

// Connect to MongoDB &
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	console.log('Connection to database is active');
});

app.listen(PORT, function() {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
