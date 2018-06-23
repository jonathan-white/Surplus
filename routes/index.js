const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

router.get('/api/hello', (req, res) => {
	res.send({ express: 'The server is up and running!' });
});

// If no API routes are hit, send the React app
router.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
