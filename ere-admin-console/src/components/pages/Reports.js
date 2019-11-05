import React from 'react';
import {Route, Link} from 'react-router-dom';
import ReportTemplates from './reports/ReportTemplates';
import Delivery from './reports/Delivery';
import H2HDelivery from './reports/H2HDelivery';

const Reports = () => (
  <div>
    <div><strong>Reports</strong></div>
    <Route exact path='/reports/reporttemplates' component={ReportTemplates}/>
    <Route exact path='/reports/delivery' component={Delivery}/>
    <Route exact path='/reports/h2hdelivery' component={H2HDelivery}/>
    <Link to='/reports/reporttemplates'>Report Templates</Link>
    <Link to='/reports/delivery'>Delivery</Link>
    <Link to='/reports/h2hdelivery'>H2H Delivery</Link>
  </div>
);

export default Reports;
