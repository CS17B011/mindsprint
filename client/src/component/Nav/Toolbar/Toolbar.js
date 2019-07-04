import React from "react";
import {Link} from 'react-router-dom';
import Burger from "../SideDrawer/Burger";

import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <Burger click={props.drawer} />
      </div>
      <div className="spacer2" />
      <div className="toolbar__logo">
        <Link to = "/">
          <i className="arrow-left fa fas fa-less-than fa-lg" />
          <span className="logo-text">MINDSPRINT</span>

          <i className="arrow-right fa fas fa-greater-than fa-lg" />
        </Link>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
          <li className = "special-button" id = "onReg">
            <Link to = "/signin">REGISTER NOW</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
