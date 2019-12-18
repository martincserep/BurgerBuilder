import React from 'react'
import styles from './Toolbar.module.scss';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Toolbar = ( props ) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);
export default Toolbar;