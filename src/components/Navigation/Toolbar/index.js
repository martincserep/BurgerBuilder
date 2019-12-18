import React from 'react'
import styles from './Toolbar.module.scss';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';

const Toolbar = ( props ) => (
    <header className={styles.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);
export default Toolbar;