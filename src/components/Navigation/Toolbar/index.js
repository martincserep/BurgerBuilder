import React from "react";

import styles from "./Toolbar.module.scss";
import Logo from "../../Logo/index.js";
import NavigationItems from "../NavigationItems/index.js";
import DrawerToggle from "../SideDrawer/DrawerToggle";

const toolbar = (props) => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <div className={styles.Logo}>
      <Logo />
    </div>
    <nav className={styles.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
