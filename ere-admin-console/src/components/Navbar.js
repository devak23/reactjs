import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import PathHelper from './helpers/PathHelper';

class Navbar extends Component {
  render () {
    let pathMap = PathHelper.getAllPaths();
    let elements = [];
    Object.keys(pathMap).forEach((path, index) => {
      let menuitem = pathMap[path];
      elements.push(<li key={index}><Link to={path}>{menuitem}</Link></li>)
    });

    return (
      <div>
        <a href='#!' className='brand-logo'>ERE Admin Console</a>
        <ul>
          {elements}
        </ul>
      </div>
    )
  }
}

export default Navbar;