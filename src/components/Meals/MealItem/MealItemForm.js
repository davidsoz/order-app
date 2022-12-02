import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

function MealItemForm({ id, onAddToCart }) {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
            setAmountIsValid(false);
            return;
        } else {
            onAddToCart(enteredAmountNumber)
        }
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='amount'
                input={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '7',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button>+ add</button>
            {!amountIsValid && <p>plese enter valid amount!</p>}
        </form>
    )
}

export default MealItemForm;