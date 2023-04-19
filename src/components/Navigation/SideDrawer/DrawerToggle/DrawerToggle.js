import React from 'react';

import classes from './DrawerToggle.module.css';

const drawerToggle = (props) => {
    return (
        <div className={classes.DrawerToggle} onClick = {props.clicked}>
            {/* <div></div>
            <div></div>
            <div></div> */}
            <div class="container">
      <div class="hamburger">
        <span class="toggle-icon"></span>
      </div>
    </div>
        </div>
)
}

export default drawerToggle;