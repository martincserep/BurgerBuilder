import React from 'react';
import logo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.scss'

const Logo = ( props ) => (
    <div className={styles.Logo} style={{height: props.height}}>
        <img alt="Company Logo" src={ logo }/>
    </div>
);
export default Logo;