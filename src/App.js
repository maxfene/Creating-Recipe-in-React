import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
//should be passed to the RecipeCreate component
//creates new recipes and adds to useState
  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe])}
//should be passed to RecipeList component
//deletes specific recipes from the list
  const deleteRecipe = index => {
    const newRecipe = ([...recipes]);
    newRecipe.splice(index, 1);
    setRecipes(newRecipe)
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe}/>
    </div>
  );
}

export default App;
