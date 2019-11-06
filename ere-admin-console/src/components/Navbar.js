import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PathHelper from './helpers/PathHelper';
import M from 'materialize-css';

class Navbar extends Component {
  componentDidMount() {
    let elements = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elements, {
      alignment: 'left',
      constrainWidth: false,
      hover: true,
      inDuration: 300,
      outDuration: 225,
      coverTrigger: false,
    });
  }

  getChildren = menuMap => {
    let elements = [];
    Object.keys(menuMap).forEach((path, index) => {
      let menuitem = menuMap[path];
      elements.push(
        <li key={index}>
          <Link to={path}>{menuitem}</Link>
        </li>
      );
    });
    return elements;
  };

  render() {
    let homeChildMenu = this.getChildren(PathHelper.getHomePaths());
    let reportsChildMenu = this.getChildren(PathHelper.getReportPaths());
    let administrationChildMenu = this.getChildren(PathHelper.getAdministrationPaths());

    return (
      <div className='navbar-fixed'>
        <nav className='blue'>
          <div className='container'>
            <div className='nav-wrapper'>
              <a href='/' className='brand-logo'>
                ERE Admin Console
              </a>
              <Link
                to='/administration'
                className='dropdown-trigger right topmenu'
                data-target='dropdown_administration'
              >
                Administration
              </Link>
              <Link to='/reports' className='dropdown-trigger right topmenu' data-target='dropdown_reports'>
                Reports
              </Link>
              <Link to='/home' className='dropdown-trigger right topmenu' data-target='dropdown_home'>
                Home
              </Link>
              <ul className='right dropdown-content vertical-tabs' id='dropdown_home'>
                {homeChildMenu}
              </ul>
              <ul className='right dropdown-content vertical-tabs' id='dropdown_reports'>
                {reportsChildMenu}
              </ul>
              <ul className='right dropdown-content vertical-tabs' id='dropdown_administration'>
                {administrationChildMenu}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
