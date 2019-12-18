import React from 'react'

import Aux from '../../../hoc/Aux/index';
import Button from '../../UI/Button/index'

const OrderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return(
                 <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
                 )
        });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button clicked={props.purchaseCancelled} buttonType="Danger">Cancel</Button>
            <Button clicked={props.purchaseContinued} buttonType="Success">Continue</Button>
        </Aux>
    )
};

export default OrderSummary;