
import classes from './MealsSummary.module.css';

function MealsSummary() {
    return (
        <section className={classes.summary}>
            <h2>This is Pre-made app for selling the products</h2>
            <p>
                In this case you can choose your favorite meal from our 'fake' menu, 
                add them to the cart and order them!
            </p>
            <p>
                The app is written on React Js! 
            </p>
        </section>
    )
}

export default MealsSummary;