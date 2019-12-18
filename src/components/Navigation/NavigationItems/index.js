import React from 'react';
import styles from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem';

const NavigationItems = () => (
    <ul className={styles.NavigationItems}>
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
)

export default NavigationItems
