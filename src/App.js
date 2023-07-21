import { Fragment } from "react";
import useFetch from "./hooks/use-fetch";
import Image from "./components/Image";
import Button from "./components/UI/Button";
import Header from "./components/Header";
import Details from "./components/Details";

function App() {
  const { recipeData, fetchRecipe, method } = useFetch();

  const recipeClickHandler = () => {
    fetchRecipe("https://www.themealdb.com/api/json/v1/1/random.php");
  };

  return (
    <Fragment>
      {recipeData && <Header recipe={recipeData[0]} />}
      {recipeData && <Image imgSrc={recipeData[0].strMealThumb}/>}
      {recipeData && <Details recipe={recipeData[0]} method={method}/>}
      <Button onClick={recipeClickHandler} text='Find me a random recipe!' />
    </Fragment>
  );
}

export default App;
