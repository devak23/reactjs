import React, { useEffect } from 'react';
import M from 'materialize-css';
import { getWidgetStyles } from '../helpers/StyleHelper';

const SideNav = ({ columns }) => {
  useEffect(() => {
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
  });

  const classes = getWidgetStyles();
  let elements = [];
  columns.forEach(col => {
    elements.push(
      <li key={col.id}>
        <label>
          <input type='checkbox' defaultChecked />
          <span className={classes.sideNavCheckBox}>{col.label}</span>
        </label>
      </li>
    );
  });

  return (
    <React.Fragment>
      <ul id='slide-out' className='sidenav'>
        <li>
          <div className='user-view'>
            <a href='#user'>
              <i className='material-icons large'>settings</i>
            </a>
          </div>
        </li>
        <li>
          <span className={classes.sideNavCheckBox}>Choose the columns in results</span>
        </li>
        <li>
          <div className='divider'></div>
        </li>
        {elements}
      </ul>
    </React.Fragment>
  );
};

export default SideNav;
