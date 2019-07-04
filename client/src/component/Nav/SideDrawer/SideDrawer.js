import React from "react";
import { Link } from 'react-router-dom';
import "./SideDrawer.css";

import '../Toolbar/Toolbar.css';
const sideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav className={drawerClasses}>
    <ul>
          <li id = "home">
            <Link to = "/">HOME</Link>
          </li>
          <li id = "about">
            <Link to = "/">ABOUT</Link>
          </li>
          <li id = "downloads">
            <Link to = "/">DOWNLOADS</Link>
          </li>
          <li id = "faq">
            <Link to = "/">FAQ</Link>
          </li>
          <li id = "login">
            <Link to = "/login">LOGIN</Link>
          </li>
          <li id = "contact">
            <Link to = "/">CONTACT US</Link>
          </li>
          <li>
            <Link to = "/signin">REGISTER NOW</Link>
          </li>
    </ul>
    </nav>
  );
};

export default sideDrawer;
