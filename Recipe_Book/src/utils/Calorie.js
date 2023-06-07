
const apiKey = 'KpH31zpXPN6L6SYxI7DUVg==7syPzcNCOmQsYkhm';

const getCalorie = async (term) => {
  try {
    console.log(term)
    const response = await fetch(`https://api.api-ninjas.com/v1/nutrition?query==${term}`, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    const result = await response.json();


    if(result.length){
      return result.map((calorie,i) => ({
        id:i,
        name: calorie.name,
        calories: calorie.calories,
        serving_size_g: calorie.serving_size_g,
        fat_total_g: calorie.fat_total_g,
        fat_saturated_g: calorie.fat_saturated_g,
        protein_g: calorie.protein_g,
        sodium_mg: calorie.sodium_mg,
        potassium_mg: calorie.potassium_mg,
        cholesterol_mg: calorie.cholesterol_mg,
        carbohydrates_total_g: calorie.carbohydrates_total_g,
        fiber_g: calorie.fiber_g,
        sugar_g: calorie.sugar_g
      }));
    }
    else{
      alert("No Result")
    }
   
  } catch (error) {
    console.error('Error:', error);
  }
};




const Calorie = {
  search(term) {
    return getCalorie(term);
  }
};

export default Calorie;


