import React from 'react';
import SideNav from './Sidenav';

const Navbar = () => (
  <div className='container'>
    <nav className='nav-wrapper transparent'>
      <a href='#' className='brand-logo'>
        Photo Ninja
      </a>
      <a href='#' className='sidenav-trigger' data-target='mobile-menu'>
        <i className='material-icons'>menu</i>
      </a>
      <ul className='right  hide-on-med-and-down'>
        <li>
          <a href='#'>Photos</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
    <SideNav />
  </div>
);

export default Navbar;
