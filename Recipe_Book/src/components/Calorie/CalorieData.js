import React from 'react'
import styles from "./calorieData.module.css"

function CalorieData({calories}) {
  console.log("calorie",calories)
  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(2,1fr)",width:"100%",gap:"10px"}}>
      {
          calories.map((e)=>{
            return(
              <div className={styles.box} key={e.id} >
                  <h2>{e.name}</h2>
                  <div className={styles.details}>
                    <p><span>Calories:</span> {e.calories}</p>
                    <p><span>Carbohydrates:</span>{e.carbohydrates_total_g}</p>
                    <p><span>Cholesterol:</span>{e.cholesterol_mg}</p>
                    <p><span>Fat Saturated:</span>{e.fat_saturated_g} </p>
                    <p><span>Fat:</span>{e.fat_total_g} </p>
                    <p><span>Fiber:</span>{e.fiber_g} </p>
                    <p><span>Potassium:</span>{e.potassium_mg}</p>
                    <p><span>Protein:</span>{e.protein_g}</p>
                    <p><span>Serving Size:</span>{e.serving_size_g}</p>
                    <p><span>Sugar:</span>{e.sugar_g}</p>
                  </div>
                  
              </div>
            )
          })
      }
    </div>
    
    
  )
}

export default CalorieData

