const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const db = require("../models");

// API Routes
// router.use("/api", apiRoutes);

router.post('/api/users', (req, res) => {
    db.Account
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
});

router.post('/api/products', function(req, res) {
  db.Product
    .create(req.body)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
});

// If no API routes are hit, send the React app
router.use("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../build/index.html"));
});

module.exports = router;
