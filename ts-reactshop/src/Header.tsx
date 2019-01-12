import * as React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Header.css';

const Header: React.SFC = () => {
  return (
    <header className='header'>
      <img className='header-logo' src={logo} alt='logo' />
      <h1 className='header-title'>React Shop</h1>
      <nav>
        <Link to='/products' className='header-link'>
          Products
        </Link>
        <Link to='/admin' className='header-link'>
          Admin
        </Link>
      </nav>
    </header>
  );
};

export default Header;
