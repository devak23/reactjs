import React from 'react';
import M from 'materialize-css';

class Menu extends React.Component {
  componentDidMount() {
    const sideNav = document.querySelector('.sidenav');
    M.Sidenav.init(sideNav, {});
  }

  render() {
    return (
      <React.Fragment>
        <div className='navbar-fixed'>
          <nav className='blue white-text'>
            <div className='container'>
              <div className='nav-wrapper'>
                <a href='#!' className='brand-logo'>
                  WS-Quotes
                </a>
                <a
                  href='#!'
                  className='sidenav-trigger'
                  data-target='mobile-menu'
                >
                  <i className='material-icons'>menu</i>
                </a>
              </div>
              <ul className='right hide-on-med-and-down'>
                <li className=''>
                  <a href='#!'>Connect</a>
                </li>
                <li className=''>
                  <a href='#!'>Disconnect</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <ul className='sidenav' id='mobile-menu'>
          <li>
            <a href='#!'>Connect</a>
          </li>
          <li>
            <a href='#!'>Disconnect</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Menu;
