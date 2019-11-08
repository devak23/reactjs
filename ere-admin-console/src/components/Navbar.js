import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PathHelper from './helpers/PathHelper';
import { Delay } from './helpers/Utils';
import { createUseStyles } from 'react-jss';
import M from 'materialize-css';

const getStyles = createUseStyles({
  topMenu: {
    paddingRight: 12,
    marginLeft: 15
  },
  verticalTabs: {
    borderLeft: '#2196f3 solid',
    borderWidth: 2,
    padding: '0 !important',
    width: 120,    
    '& li a': {
      color: 'black !important',
      fontSize: 14
    }
  }
});

const getChildren = (menuMap)  => {
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

const Navbar = () => {
  useEffect(() => {
    let elements = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elements, {
      alignment: 'left',
      constrainWidth: false,
      hover: true,
      inDuration: Delay.IN_DURATION,
      outDuration: Delay.OUT_DURATION,
      coverTrigger: false,
    });
  });

    let classes = getStyles();
    let homeChildMenu = getChildren(PathHelper.getHomePaths());
    let reportsChildMenu = getChildren(PathHelper.getReportPaths());
    let administrationChildMenu = getChildren(PathHelper.getAdministrationPaths());

    return (
      <div className='navbar-fixed'>
        <nav className='blue darken-4'>
          <div className='container'>
            <div className='nav-wrapper'>
              <a href='/' className='brand-logo'>
                ERE Admin Console
              </a>
              <Link
                to='/administration'
                className={`dropdown-trigger right ${classes.topMenu}`}
                data-target='dropdown_administration'
              >
                Administration
              </Link>
              <Link to='/reports' className={`dropdown-trigger right ${classes.topMenu}`} data-target='dropdown_reports'>
                Reports
              </Link>
              <Link to='/home' className={`dropdown-trigger right ${classes.topMenu}`} data-target='dropdown_home'>
                Home
              </Link>

              <ul className={`right dropdown-content ${classes.verticalTabs}`} id='dropdown_home'>
                {homeChildMenu}
              </ul>
              <ul className={`right dropdown-content ${classes.verticalTabs}`} id='dropdown_reports'>
                {reportsChildMenu}
              </ul>
              <ul className={`right dropdown-content ${classes.verticalTabs}`} id='dropdown_administration'>
                {administrationChildMenu}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }


// export default withStyles(Navbar, styles);
export default Navbar;

