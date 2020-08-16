const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByCategory: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ dateAdded: -1 })
      .then(dbModel => {
        let general = [],
          furniture = [],
          electronics = [],
          apparel = [],
          office = [];

        dbModel.forEach(p => {
          switch(p.category) {
            case 'Furniture':
              furniture.push(p);
              break;
            case 'Electronics':
              electronics.push(p);
              break;
            case 'Apparel':
              apparel.push(p);
              break;
            case 'Office':
              office.push(p);
              break;
            default:
              general.push(p);
              break;
          }
        });

        const results = {
          furnitureProducts: furniture,
          electronicProducts: electronics,
          apparelProducts: apparel,
          officeProducts: office,
          generalProducts: general
        }

        res.json(results);
      })
      .catch(err => res.status(422).json(err));
  },
  findCategory: function(req, res) {
    db.Product
      .find({category: req.params.category})
      .sort({ dateAdded: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findProduct: function(req, res) {
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
      .then(dbModel => dbModel.deleteOne())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
