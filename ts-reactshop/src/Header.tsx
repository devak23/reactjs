import * as React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

const Header: React.SFC = () => {
  return (
    <header className='header'>
      <img className='header-logo' src={logo} alt='logo' />
      <h1 className='header-title'>React Shop</h1>
      <nav>
        <NavLink to='/products' className='header-link' activeClassName='header-link-active'>
          Products
        </NavLink>
        <NavLink to='/admin' className='header-link' activeClassName='header-link-active'>
          Admin
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
