import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';
import CartItem from './CartItem';

function Cart({ onClose }) {

    const cartCtx = useContext(CartContext);
    const totalAmount  = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    function cartItemAddHandler(item) {
        
    }

    function cartItemRemoveHandler(id) {

    }

    const cartItems = <ul className={classes['cart-items']}>
        {
            cartCtx.items.map(item => (
                <CartItem 
                    key={item.id} 
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onAdd={cartItemAddHandler.bind(null, item)}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                />
            ))
        }
    </ul>
    return (
        <Modal onClose={onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>total</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={onClose}>close</button>
                {hasItems &&  <button className={classes.button}>order</button>}
            </div>
        </Modal>
    )
}

export default Cart;