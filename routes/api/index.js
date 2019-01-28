const router = require("express").Router();
const recipesRoutes = require("./recipes");
const fridgeRoutes = require("./fridgelist");

// Recipes routes
router.use("/recipe", recipesRoutes);
router.use("/fridgelist", fridgeRoutes);

module.exports = router;
