import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => (
  <div className="ui menu">
    <Link className='item' to='/'>Home</Link>
    <Link className='item' to='/roster' >Roster</Link>
    <Link className='item' to='/schedule' >Schedule</Link>
  </div>
);

export default Header;