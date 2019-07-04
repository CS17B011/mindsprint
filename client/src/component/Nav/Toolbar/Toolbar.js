import React from "react";

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
        <a href="/">
          <i className="arrow-left fa fas fa-less-than fa-lg" />
          <span className="logo-text">MINDSPRINT</span>

          <i className="arrow-right fa fas fa-greater-than fa-lg" />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
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
            <a href="/">LOGIN</a>
          </li>
          <li>
            <a href="/">CONTACT US</a>
          </li>
          <li>
            <a className="special-button" id="onReg" href="/">
              REGISTER NOW
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
