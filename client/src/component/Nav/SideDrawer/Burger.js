import React from 'react';

import './Burger.css';

const burger = props => (
  <button className='toggle-button' onClick={props.click}>
    <div className='toggle-button__line' />
    <div className='toggle-button__line' />
    <div className='toggle-button__line' />
  </button>
);

export default burger;
