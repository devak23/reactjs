import React from 'react';
import SideNav from './Sidenav';

const Navbar = () => (
  <div className='container'>
    <nav className='nav-wrapper transparent'>
      <a href='#!' className='brand-logo'>
        Photo Ninja
      </a>
      <a href='#!' className='sidenav-trigger' data-target='mobileMenu'>
        <i className='material-icons'>menu</i>
      </a>
      <ul className='right hide-on-med-and-down'>
        <li>
          <a href='#photogrid'>Photos</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <SideNav />
    </nav>
  </div>
);

export default Navbar;
