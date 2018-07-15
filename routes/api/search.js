const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/search?q="
router.route("/")
  .get(searchController.search);

module.exports = router;
