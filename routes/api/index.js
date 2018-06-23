const router = require("express").Router();
const productRoutes = require("./products");
const accountRoutes = require("./accounts");

// product routes
router.use("/products", productRoutes);
router.use("/user", accountRoutes);

module.exports = router;
