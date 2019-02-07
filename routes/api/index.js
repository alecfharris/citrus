const router = require('express').Router();
const recipesRoutes = require('./recipes');
const fridgeRoutes = require('./fridgelist');

// Recipes routes
router.use('/recipes', recipesRoutes);
router.use('/fridgelist', fridgeRoutes);

module.exports = router;
