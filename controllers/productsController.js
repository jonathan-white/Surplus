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
  findById: function(req, res) {
    db.Product
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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
  },
  findByTerm: function(req, res) {
    console.log('Inside findbyTerm', req.query);
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
