import React, { useEffect } from 'react'
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import DeliveryTemplateDataHelper from '../../datahelper/DeliveryTemplateDataHelper';
import SearchWidget from '../../widgets/SearchWidget';
import M from 'materialize-css';


const Delivery = () => {
  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  });

  const data = {
    0: [ {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds(), maxColums: 5}
      , {id: 'templateName', type: 'text', label: 'TEMPLATE NAME', width: 2, values: {}, maxColums: 5}
      , {id: 'accountNumber', type: 'text', label: 'ACCOUNT NUMBER', width: 2, values: {}, maxColums: 5}
      , {id: 'country', type: 'select', label: 'COUNTRY', width: 2, values: DeliveryTemplateDataHelper.getCountries(), maxColums: 5}
      , {id: 'status', type: 'select', label: 'STATUS', width: 2, values: DeliveryTemplateDataHelper.getStatuses(), maxColums: 5}
    ]
  }

  return (
    <div>
      <SearchWidget data={data} />
    </div>
  );  
}

export default Delivery;