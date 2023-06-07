import React, { useState } from "react";

import RecipesList from "./components/RecipesList/RecipesList";
import SearchBar from "./components/SearchBar/SearchBar";
import Data from "./utils/Data";


const App = () => {
  const [Recipes, setRecipes] = useState([]);
  

  const searchRecipe = async (term) => {
    const Recipe = await Data.search(term);
    setRecipes(Recipe);
  };


  return (
    <div>
      <h1 style={{textAlign:"center"}}>RecipeBook</h1>
      <SearchBar  searchRecipe={searchRecipe} />
      <RecipesList Recipes={Recipes} />
    </div>
  );
};

export default App;
