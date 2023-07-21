import classes from './Header.module.css';
import Card from "./UI/Card";

const Header = (props) => {
    const { strMeal: name } = props.recipe
    return (
        <Card className={classes.header}>
            <header>
                <h1>{name}</h1>
            </header>
        </Card>
    );
};

export default Header;