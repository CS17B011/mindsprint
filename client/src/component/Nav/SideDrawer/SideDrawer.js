import React from "react";
import { Link } from 'react-router-dom';
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
          <Link to = "/">HOME</Link>
        </li>
        <li>
          <Link to = "/">ABOUT</Link>
        </li>
        <li>
          <Link to = "/">DOWNLOADS</Link>
        </li>
        <li>
          <Link to = "/">FAQ</Link>
        </li>
        <li>
          <Link to = "/">CONTACT US</Link>
        </li>
        <li>
          <Link to = "/login">LOGIN</Link>
        </li>
        <li>
          <Link className="special-button__mobile" id="onReg" to = "/signin">
            REGISTER NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
