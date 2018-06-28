const router = require("express").Router();
const accountsController = require("../../controllers/accountsController");

// Matches with "/api/users"
router.route("/")
  .get(accountsController.findAll)
  .post(accountsController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(accountsController.findById)
  .put(accountsController.update)
  .delete(accountsController.remove);

// Matches with "/api/users/login"
// router
//     .route("/login")
//     .post(accountsController.login);

module.exports = router;
