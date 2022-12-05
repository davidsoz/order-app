import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

function HeaderCartButton({onClick}) {
    const [isHighlighted, setIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;
    const numberOfItems = cartCtx.items.reduce((current, item) => {
        return current + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${isHighlighted ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setIsHighlighted(true);

        const animationTimer = setTimeout(() => {
            setIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(animationTimer);
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderCartButton;