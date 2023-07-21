import classes from "./IngredientsTable.module.css";

const IngredientsTable = (props) => {

  let ingredientList = [];
  let measureList = [];
  for (const i in props.recipe) {
    if (i.includes("strIngredient")) {
      ingredientList.push(props.recipe[i]);
    }
    if (i.includes("strMeasure")) {
      measureList.push(props.recipe[i]);
    }
  }

  const filteredIngredientList = ingredientList.filter(
    (item) => item.trim().length !== 0
  );
  const filteredMeasureList = measureList.filter(
    (item) => item.trim().length !== 0
  );

  return (
    <div className={classes['ingredients-table']}>
      <table>
        <thead>
          <tr>
            <th>Ingredient</th>
          </tr>
        </thead>
        <tbody>
          {filteredIngredientList.map((ingredient) => (
            <tr key={ingredient.index}>
              <td className={classes['ingredients-cells']}>{ingredient}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
          </tr>
        </thead>
        <tbody>
          {filteredMeasureList.map((measure) => (
            <tr key={measure.index}>
              <td>{measure}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientsTable;
