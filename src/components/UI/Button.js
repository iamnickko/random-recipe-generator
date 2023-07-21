import classes from "./Button.module.css";
import Card from "./Card";

const Button = (props) => {
  return (
    <Card className={classes.button}>
      <button onClick={props.onClick}>{props.text}</button>
    </Card>
  );
};

export default Button;
