
const apiKey = 'KpH31zpXPN6L6SYxI7DUVg==7syPzcNCOmQsYkhm';

const getRecipe = async (term) => {
  try {
    const response = await fetch(`https://api.api-ninjas.com/v1/recipe?query=${term}`, {
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
      return result.map((business,i) => ({
        id:i,
        title: business.title,
        ingredients: business.ingredients,
        servings: business.servings,
        instructions: business.instructions
      }));
    }
    else{
      alert("No Result")
    }
   
  } catch (error) {
    console.error('Error:', error);
  }
};




const Data = {
  search(term) {
    return getRecipe(term);
  }
};

export default Data;


