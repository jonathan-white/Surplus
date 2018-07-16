const router = require("express").Router();
const paymentsController = require("../../controllers/paymentsController");

// Matches with "/api/payments"
router.route("/")
  .get(paymentsController.paymentMethod)

module.exports = router;
