import React from 'react';
import styles from './SideDrawer.module.scss';
import NavigationItems from '../NavigationItems';
import Logo from '../../Logo/index';
import Aux from '../../../hoc/Aux/index';
import Backdrop from '../../UI/Backdrop/index'

const SideDrawer = ( props ) => {
    let attachedClasses = [styles.SideDrawer, styles.Close];
    if (props.open) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}

export default SideDrawer;