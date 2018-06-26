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

// app.all("/*", function(req, res, next) {
//   // CORS headers
//   res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
//   res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
//   // Set custom headers for CORS
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Content-type,Accept,X-Access-Token,X-Key"
//   );
//   if (req.method == "OPTIONS") {
//     res.status(200).end();
//   } else {
//     next();
//   }
// });

app.use(routes);

// If deployed, use the deployed database. Otherwise use the local nytreact database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/surplusDB");

app.listen(PORT, function() {
  console.log("Server listening on port http://localhost:" + PORT);
});
