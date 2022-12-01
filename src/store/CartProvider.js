
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
    items: [],
    totalAmount: 0
}

function cartReducer(state, action) {
    return defaultState;
}

function CartProvider({children}) {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultState)

    function addItemHandler(item) {
        dispatchCart({type: 'ADD', item});
    }

    function removeItemHandler(id) {
        dispatchCart({type: 'REMOVE', id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;