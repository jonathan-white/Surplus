const db = require("../models");

// Defining methods for the productsController
module.exports = {
  checkout: function(req, res) {
    db.Cart
      .find(req.query)
      .sort({ _id: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
