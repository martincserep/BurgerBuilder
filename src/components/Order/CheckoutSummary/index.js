import React from "react";

import styles from "./CheckoutSummary.module.scss";

import Burger from "../../Burger/index";
import Button from "../../UI/Button/index";

const CheckoutSummary = (props) => {
    return (
        <div className={styles.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div className={styles.Burger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button
                clicked={props.checkoutCancelled}
                buttonType="Danger">Cancel</Button>
            <Button
                clicked={props.checkoutContinued}
                buttonType="Success">Continue</Button>
        </div>
    )
}
export default CheckoutSummary;