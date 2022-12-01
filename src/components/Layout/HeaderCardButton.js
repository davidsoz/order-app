import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

function HeaderCartButton({onClick}) {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((current, item) => {
        return current + item
    }, 0)

    return (
        <button className={classes.button} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;