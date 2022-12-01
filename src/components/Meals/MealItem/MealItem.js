import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';

function MealItem({ name, description, price, id }) {
    const fixedPrice = `$${price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div>
                <h3>{name}</h3>
                <div className={classes.description}>{description}</div>
                <div className={classes.price}>{fixedPrice}</div>
            </div>
            <div>
                <MealItemForm id={id}/>
            </div>
        </li>
    )
}

export default MealItem;