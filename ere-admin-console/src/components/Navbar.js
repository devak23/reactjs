import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Navbar extends Component {
  linkMap = {}
  constructor() {
    super();
    this.linkMap['/home'] = 'Home';
    this.linkMap['/home/dashboard'] = 'Dashboard';
    this.linkMap['/home/diagnostics'] = 'Diagnostics';
    this.linkMap['/reports'] = 'Reports';
    this.linkMap['/reports/delivery'] = 'Delivery';
    this.linkMap['/reports/h2hdelivery'] = 'H2H Delivery';
    this.linkMap['/reports/reporttemplates'] = 'Report Templates';
    this.linkMap['/administration'] = 'Administration';
    this.linkMap['/administration/accountupload'] = 'Account Upload';
    this.linkMap['/administration/awacs'] = 'AWACS';
    this.linkMap['/administration/cmsfileupload'] = 'CMS File Upload';
    this.linkMap['/administration/entitlements'] = 'Entitlements';
    this.linkMap['/administration/logsmodification'] = 'Logs Modification';
  }
  render () {
    let elements = [];
    Object.keys(this.linkMap).forEach((path, index) => {
      let menuitem = this.linkMap[path];
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