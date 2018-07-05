const db = require("../models");

// Defining methods for the productsController
module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findCategory: function(req, res) {
    db.Product
      .find({category: req.params.category})
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findItem: function(req, res) {
    if(req.query) {
      // Search by queryterm if req.query exists
      // Searches both title (weight 10) and description (weight 5)
      // and sorts results based on the score (determined by weights)
      db.Product
        .find(
          { $text: { $search: req.query.q } },
          { score: { $meta: "textScore" } }
        )
        .sort({ score: { $meta: 'textScore' } })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    } else {
      // Search by params.id if req.query does not exist
      db.Product
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  },
  findByUser: function(req, res) {
    db.Product
      .find({userId: req.params.id})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Product
      .create(req.body)
      .then(dbProduct => {
        return db.Account.findOneAndUpdate({userId: req.body.userId}, { $push: { products: dbProduct._id } }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Product
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Product
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
