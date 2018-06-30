const router = require("express").Router();
const cartController = require("../../controllers/cartController");

// Matches with "/api/products"
router.route("/")
  .get(cartController.findAll)
  .post(cartController.create);

// Matches with "/api/products/:id"
router
  .route("/:id")
  .get(cartController.findById)
  .put(cartController.update)
  .delete(cartController.remove);

module.exports = router;
