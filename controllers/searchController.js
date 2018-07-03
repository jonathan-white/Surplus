const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findByTerm: function(req, res) {
    console.log('Inside findbyTerm(Q)', req.query);
    db.Product
      .find({title: req.query.q})
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err);
        res.status(422).json(err);
      });
  }
};
