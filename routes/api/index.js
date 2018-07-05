const router = require("express").Router();
const productRoutes = require("./products");
const accountRoutes = require("./accounts");
const uploadRoutes = require("./uploads");
const checkoutRoutes = require("./checkout");

// api routes
router.use("/products", productRoutes);
router.use("/users", accountRoutes);
router.use("/uploads",uploadRoutes);
router.use("/checkout",checkoutRoutes);

router.get("/session", (req, res) => {
  console.log('Session:',req.sessionID);
  res.json(req.sessionID);
});

module.exports = router;
