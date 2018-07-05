const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
// Matches with "/api/products/search?q="
router.route("/:id")
  .get(productsController.findItem)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/user/:id"
router.route("/user/:id")
  .get(productsController.findByUser);

router.route("/category/:category")
  .get(productsController.findCategory);

module.exports = router;
