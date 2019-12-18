import React from 'react';

import Aux from '../../hoc/Aux/index'

import styles from './Layout.module.scss';
import Toolbar from '../Navigation/Toolbar';

const layout = ( props ) => (
    <Aux>
    <Toolbar />
    <div>SideDrawer</div>
    <main className={styles.Content}>
        {props.children}    
    </main>
    </Aux>
);

export default layout;