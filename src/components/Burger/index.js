import React from 'react';
import styles from './Burger.module.scss';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
    let transformedingredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
            return <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        });
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if ( transformedingredients.length === 0) {
        transformedingredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}
export default Burger;