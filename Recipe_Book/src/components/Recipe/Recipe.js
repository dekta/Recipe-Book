import React,{useState} from "react";
import styles from "./Recipe.module.css";
import CalorieData from "../Calorie/CalorieData"
import Calorie from "../../utils/Calorie"

const Recipe = ({Recipes}) => {
  const [calories,setCalorie] = useState([])
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async() => {
    setIsOpen(!isOpen)
    const calorie = await Calorie.search(Recipes.title);
    setCalorie(calorie)
  };
  console.log(isOpen)
 
  const closePopup = () => {
    setIsOpen(!isOpen);
  };



  return (
      <div className={styles.Recipes}>
      <h2>{Recipes.title}</h2>
      <div className={styles.RecipesInformation}>
        <div className={styles.Recipesgen}>
          <p style={{fontWeight: "bold"}}>{Recipes.servings}</p>
          <p> <span style={{fontWeight: "bold"}}>Ingredients:</span>  {Recipes.ingredients}</p>
        </div>
        <div className={styles.instructions}>
          <h3><span style={{fontWeight: "bold",color:"black"}}>Instructions:</span>{Recipes.instructions}</h3>
        </div>
        <button onClick={handleClick} className={styles.calories}>Nutrition Informations</button>
      </div>

      {isOpen && (
         <div className={styles.popupContent} >
           <p className={styles.cross} onClick={closePopup}>X</p>
          <h1 className={styles.head}>Nutrition Informations</h1>
          
            <CalorieData calories={calories} />
          </div>
      )}
      </div>

    

  );
};

export default Recipe;
