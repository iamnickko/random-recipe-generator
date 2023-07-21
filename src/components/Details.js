import { useState, useEffect } from "react";
import classes from "./Details.module.css";
import Card from "./UI/Card";
import IngredientsTable from "./IngredientsTable";

const Details = (props) => {
  const [activeContent, setActiveContent] = useState("");

  useEffect(() => {
    setActiveContent(props.method);
  }, [props.method]);

  return (
    <Card className={classes.instructions}>
      <div id={classes.tabs}>
        <menu>
          <li>
            <button
              onClick={() => {
                setActiveContent(props.method);
              }}
            >
              Method
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setActiveContent(<IngredientsTable recipe={props.recipe} />);
              }}
            >
              Ingredients
            </button>
          </li>
        </menu>
        <div id="tab-content">
          <ul>{activeContent}</ul>
        </div>
      </div>
    </Card>
  );
};

export default Details;
