import React from "react";
import { Link } from "react-router-dom";

import Burger from "../SideDrawer/Burger";
import "./Toolbar.css";

const toolbar = props => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className='spacer2' />
      <div className='toolbar__logo'>
        <Link to='/'>
          <i className='arrow-left fa fas fa-less-than fa-lg' />
          <span className='logo-text'>MINDSPRINT</span>

          <i className='arrow-right fa fas fa-greater-than fa-lg' />
        </Link>
      </div>
      <div className='spacer' />
      <div className='toolbar_navigation-items'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/downloads">DOWNLOADS</Link>
          </li>
          <li>
            <Link to="/faqs">FAQ</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link className="special-button" id="onReg" to="/register">
              REGISTER NOW
            </Link>
          </li>
        </ul>
      </div>
      <div className='toolbar__toggle-button'>
        <Burger click={props.drawer} xbtn={props.xbtn} />
      </div>
    </nav>
  </header>
);

export default toolbar;
