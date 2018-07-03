const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products?q="
router.route("/:id")
  .get(productsController.findByTerm);

// Matches with "/api/products"
router.route("/search")
  .get(productsController.findByTerm);

module.exports = router;
