import classes from './Cart.module.css';

function Cart() {
    const cartItems = <ul className={classes['cart-items']}>
        {
            [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(item => (
                <li>{item.name}</li>
            ))
        }
    </ul>
    return (
        <div >
            {cartItems}
            <div className={classes.total}>
                <span>total</span>
                <span>35.5</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </div>
    )
}

export default Cart;