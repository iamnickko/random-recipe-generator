import classes from './Image.module.css';
import Card from "./UI/Card";

const Image = (props) => {
  return (
    <Card className={classes.image}>
      <img className={classes.img} src={props.imgSrc} alt={props.name} />
    </Card>
  );
};

export default Image;
