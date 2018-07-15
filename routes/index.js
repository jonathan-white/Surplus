const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const productsController = require("../controllers/productsController");

// API Routes
router.use("/api", apiRoutes);

// Allow images stored in the images folder to be served up
router.get("/images/:filename", (req, res) => {
    res.sendFile(path.join(__dirname, "../build/images/" + req.params.filename));
});

// If no API routes are hit, send the React app
router.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
