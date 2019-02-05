import React from 'react';
import SideNav from './sidenav';

const Navbar = () => (
  <div className='container'>
    <nav className='nav-wrapper transparent'>
      <a href='#' className='brand-logo'>
        Photo Ninja
      </a>
      <ul className='right'>
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
