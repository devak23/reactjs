import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import PathHelper from './helpers/PathHelper';

class Navbar extends Component {
  render () {
    let pathMap = PathHelper.getFilteredPaths(this.props.location.pathname);
    let elements = [];
    Object.keys(pathMap).forEach((path, index) => {
      let menuitem = pathMap[path];
      elements.push(<li key={index}><Link to={path}>{menuitem}</Link></li>)
    });

    return (
      <div className='navbar-fixed'>
        <nav className='indigo darken-4'>
          <div className="container">
            <div className="nav-wrapper">
            <a href='#!' className='brand-logo'>ERE Admin Console</a>
            <ul className='right'>
              {elements}
            </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;