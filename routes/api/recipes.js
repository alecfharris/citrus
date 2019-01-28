const router = require("express").Router();
const recipesController = require("../../controllers/recipesController");

// Matches with "/api/search"
router.route("/")
  .get(recipesController.findAll)
  .post(recipesController.create);

// Matches with "/api/search/:id"
router
  .route("/:id")
  .get(recipesController.findById)
  .delete(recipesController.remove);

module.exports = router;