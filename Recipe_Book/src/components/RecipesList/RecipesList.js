import React from "react";
import styles from "./RecipesList.module.css";

import Recipe from "../Recipe/Recipe";

const RecipesList = ({Recipes}) => {
  return (
    <div className={styles.RecipesList}>
      {Recipes.map((Recipes) => {
        return <Recipe Recipes={Recipes} key={Recipes.id} />;
      })}
    </div>
  );
};

export default RecipesList;
