import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem({ name, description, price, id }) {
    const cartCtx = useContext(CartContext);
    
    const fixedPrice = `$${price.toFixed(2)}`
    function addCartHandler(amount) {
        cartCtx.addItem({
            id: id,
            name: name,
            amount: amount,
            price: price
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fixedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id} onAddToCart={addCartHandler}/>
            </div>
        </li>
    )
}

export default MealItem;