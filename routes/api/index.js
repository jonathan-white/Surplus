const router = require("express").Router();
const productRoutes = require("./products");
const accountRoutes = require("./accounts");
const uploadRoutes = require("./uploads");
const checkoutRoutes = require("./checkout");
const searchRoutes = require("./search");
const paymentRoutes = require("./payments");

// api routes
router.use("/products", productRoutes);
router.use("/users", accountRoutes);
router.use("/uploads",uploadRoutes);
router.use("/checkout",checkoutRoutes);
router.use("/search", searchRoutes);
router.use("/payments", paymentRoutes);

router.get("/session", (req, res) => {
  console.log('Session:',req.sessionID);
  res.json(req.sessionID);
});

router.get("/ip-address", (req, res) => {
	res.json(req.headers['x-forwarded-for'] || req.connection.remoteAddress);
});

module.exports = router;
