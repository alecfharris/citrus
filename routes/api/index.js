const router = require('express').Router(); 
const recipesRoutes = require('./recipes');
const fridgeRoutes = require('./fridgelist');
const apiRecipeRoutes = require('./apirecipes')

// Recipes routes
router.use('/recipes', recipesRoutes);
router.use('/fridgelist', fridgeRoutes);
router.use('/apirecipes', apiRecipeRoutes);

module.exports = router;
