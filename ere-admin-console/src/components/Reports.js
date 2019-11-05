import React from 'react';
import ReportTemplates from './reports/ReportTemplates';
import Delivery from './reports/Delivery';
import H2HDelivery from './reports/Delivery';

const Reports = () => (
  <div>
    <div><strong>Reports</strong></div>
    <ReportTemplates />
    <Delivery />
    <H2HDelivery />
  </div>
);

export default Reports;
