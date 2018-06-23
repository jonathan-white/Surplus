const router = require("express").Router();
const productRoutes = require("./products");
const companyRoutes = require("./companies");

// product routes
router.use("/products", productRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
