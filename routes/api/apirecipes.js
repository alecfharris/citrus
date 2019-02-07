const router = require('express').Router();
const apiRecipesController = require('../../controllers/apiRecipesController');

// Matches with "/api/search"
router
  .route('/')
  .get(apiRecipesController.findAll)
  .post(apiRecipesController.create);

// Matches with "/api/search/:id"
router
  .route('/:id')
  .get(apiRecipesController.findById)
  .delete(apiRecipesController.remove);

module.exports = router;
