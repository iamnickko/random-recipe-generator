import { useState } from "react";

const useFetch = () => {
  const [recipeData, setRecipeData] = useState("");
  const [method, setMethod] = useState('');

  const fetchRecipe = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipeData(data.meals);
    const transformedMethod = data.meals[0].strInstructions.split("\r\n");
    const removeBlanks = transformedMethod.filter(value => value !== '')
    const formattedMethod = removeBlanks.map((text) => {
          return <li key={text.index}>{text}</li>;
    })
    setMethod(formattedMethod);
  };
  return {
    recipeData, setRecipeData, fetchRecipe, method,
  }
};

export default useFetch;
