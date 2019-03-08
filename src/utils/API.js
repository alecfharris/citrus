import axios from 'axios';

export default {
  // Gets all recipes
  getRecipes() {
    return axios.get('/api/recipes');
  },
  // Gets the recipe with the given id
  getRecipe(id) {
    return axios.get(`/api/recipes/${id}`);
  },
  // Deletes the recipe with the given id
  deleteRecipe(id) {
    return axios.delete(`/api/recipes/${id}`);
  },
  // Saves a recipe to the database
  saveRecipe(recipeData) {
    return axios.post('/api/recipes', recipeData);
  },
  // Saves a recipe to the database
  saveAPIRecipe(recipeData) {
    return axios.post('/api/apirecipes', recipeData);
  },
  // Gets all recipes
  getFridge() {
    return axios.get('/api/fridgelist');
  },
  saveFridge() {
    return axios.post('/api/fridgelist');
  },
};
