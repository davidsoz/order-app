import { Fragment } from "react";
import classes from "./Header.module.css"
import mealsImage from '../../assets/meals.jpeg';
import HeaderCartButton from "./HeaderCardButton";

function Header({ onShowCart }) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meals</h1>
                <HeaderCartButton onClick={onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='table with foods' />
            </div>
        </Fragment>
    )
}

export default Header;