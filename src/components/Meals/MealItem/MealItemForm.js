import Input from '../../UI/Input';
import classes from './MealItemForm.module.css'

function MealItemForm({id}) {
    return (
        <form className={classes.form}>
            <Input label='amount' input={{
                id: 'amount_' + id,
                type: 'number',
                min: '1',
                max: '7',
                step: '1',
                defaultValue: '1' 
            }} />
            <button>+ add</button>
        </form>
    )
}

export default MealItemForm;