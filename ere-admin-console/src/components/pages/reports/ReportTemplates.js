import React, { useEffect } from 'react'
import ReportsTemplateDataHelper from '../../datahelper/ReportsTemplateDataHelper';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import SearchWidget from '../../widgets/SearchWidget';
import M from 'materialize-css';

const ReportTemplates = () => {
  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  });

  const data = {
    0: [ {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds()}
      , {id: 'deliveryType', type: 'select', label: 'DELIVERY TYPE', width: 2, values: ReportsTemplateDataHelper.getDeliveryTypes()}
      , {id: 'templateName', type: 'text', label: 'TEMPLATE NAME', width: 2, values: {}}
      , {id: 'createdBy', type: 'text', label: 'CREATED BY', width: 2, values: {}}
      , {id: 'status', type: 'select', label: 'OUTPUT TYPE', width: 2, values: ReportsTemplateDataHelper.getDeliveryStatus()}
    ]
  }

  return (
    <div>
      <SearchWidget data={data} />
    </div>
  );  
}

export default ReportTemplates;