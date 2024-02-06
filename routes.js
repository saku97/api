const express = require("express");
const router = express.Router();
const recipeController = require("./controllers/recipeController");

router.post("/recipes", recipeController.createRecipe);
router.get("/recipes", recipeController.getRecipes);
router.get("/recipes/:id", recipeController.getRecipeById);
router.patch("/recipes/:id", recipeController.updateRecipe);
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;
