import React from 'react';

import './Burger.css';

const burger = props => {
  const isNavOpen = props.xbtn;
  return (
    <button
      className={`toggle-button ${isNavOpen ? 'toggle' : ''}`}
      onClick={props.click}
    >
      <div className='toggle-button__line line1' />
      <div className='toggle-button__line line2' />
      <div className='toggle-button__line line3' />
    </button>
  );
};

export default burger;
