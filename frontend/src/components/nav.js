import React from 'react';

import './general.css'

function Nav(props) {

  return <div className='menu'>
    <h1>Home</h1>
    <h1>Menu</h1>
    <h1>Our Location</h1>
    <button className='order-online' onClick={props.menupop}><h1>ORDER ONLINE</h1></button>
  </div>
}

export default Nav;