import Modal from '../UI/Modal';
import classes from './Cart.module.css';

function Cart({onClose}) {
    const cartItems = <ul className={classes['cart-items']}>
        {
            [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(item => (
                <li key={item.id}>{item.name}</li>
            ))
        }
    </ul>
    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>total</span>
                <span>35.5</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </Modal>
    )
}

export default Cart;