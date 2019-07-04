import React from "react";

import "./SideDrawer.css";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/">ABOUT</a>
        </li>
        <li>
          <a href="/">DOWNLOADS</a>
        </li>
        <li>
          <a href="/">FAQ</a>
        </li>
        <li>
          <a href="/">CONTACT US</a>
        </li>
        <li>
          <a href="/">LOGIN</a>
        </li>
        <li>
          <a className="special-button__mobile" id="onReg" href="/">
            REGISTER NOW
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
