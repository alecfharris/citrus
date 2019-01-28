const router = require("express").Router();
const fridgeController = require("../../controllers/fridgeController");

// Matches with "/api/search"
router.route("/")
    .get(fridgeController.findAll)
    .post(fridgeController.create);

// Matches with "/api/search/:id"
router
    .route("/:id")
    .delete(fridgeController.remove);

module.exports = router;