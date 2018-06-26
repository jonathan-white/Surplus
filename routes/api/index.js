const router = require("express").Router();
const productRoutes = require("./products");
const accountRoutes = require("./accounts");
const uploadRoutes = require("./uploads");

// api routes
router.use("/products", productRoutes);
router.use("/users", accountRoutes);
router.use("/uploads",uploadRoutes);

module.exports = router;
