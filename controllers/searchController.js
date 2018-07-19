const db = require("../models");

module.exports = {
  search: function(req, res) {
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
  },
};
