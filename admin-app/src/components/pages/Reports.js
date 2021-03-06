import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ReportTemplates from './reports/ReportTemplates';
import Delivery from './reports/Delivery';
import H2HDelivery from './reports/H2HDelivery';

const Reports = () => (
  <section className='container'>
    <Switch>
      <Route exact path='/reports/reporttemplates' component={ReportTemplates}/>
      <Route exact path='/reports/delivery' component={Delivery}/>
      <Route exact path='/reports/h2hdelivery' component={H2HDelivery}/>
      <Route exact path='/reports' component={ReportTemplates}/>
    </Switch>
  </section>
);

export default Reports;
