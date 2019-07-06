import React from 'react';
import { Link } from 'react-router-dom';
import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  const navLinks = document.querySelectorAll('li.move');
  console.log(navLinks);
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
  });

  return (
    <nav className={drawerClasses}>
      <ul className='link-tab'>
        <li className='move'>
          <Link to='/'>HOME</Link>
        </li>
        <li className='move'>
          <Link to='/'>ABOUT</Link>
        </li>
        <li className='move'>
          <Link to='/'>DOWNLOADS</Link>
        </li>
        <li className='move'>
          <Link to='/'>FAQ</Link>
        </li>
        <li className='move'>
          <Link to='/'>CONTACT US</Link>
        </li>
        <li className='move'>
          <Link to='/login'>LOGIN</Link>
        </li>
        <li className='move'>
          <Link className='special-button__mobile' id='onReg' to='/signin'>
            REGISTER NOW
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
