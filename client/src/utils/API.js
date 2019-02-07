import axios from "axios";

export default {
    // Gets all recipes
    getRecipes: function () {
        return axios.get("/api/recipes");
    },
    // Gets the book with the given id
    getRecipe: function (id) {
        return axios.get("/api/recipes/" + id);
    },
    // Deletes the book with the given id
    deleteRecipe: function (id) {
        return axios.delete("/api/recipes/" + id);
    },
    // Saves a book to the database
    saveRecipe: function (recipeData) {
        return axios.post("/api/recipes", recipeData);
    }
};
