import React from 'react';
import styles from './NavigationItem.module.scss'
import { NavLink } from 'react-router-dom';



const NavigationItem = ( props ) => (
    <li className={styles.NavigationItem}>
        <NavLink to={props.link}
            exact
            activeClassName={styles.active}
        // className={props.active ? styles.active : null }
        >{props.children}</NavLink>
    </li>
)

export default NavigationItem;
