const router = require("express").Router();
const productsController = require("../../controllers/productsController");

// Matches with "/api/products"
router.route("/")
  .get(productsController.findAll)
  .post(productsController.create);

// Matches with "/api/products/:id"
router.route("/:id")
  .get(productsController.findProduct)
  .put(productsController.update)
  .delete(productsController.remove);

// Matches with "/api/products/user/:id"
router.route("/user/:id")
  .get(productsController.findByUser);

// Matches with "/api/products/category/:category"
router.route("/category/:category")
  .get(productsController.findCategory);

module.exports = router;
