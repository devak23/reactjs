import React, { useEffect } from 'react'
import SearchWidget from '../../widgets/SearchWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import M from 'materialize-css';


const H2HDelivery = () => {
  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  });

  const metadata = {
    0: [ {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds(), maxColums: 5}
      , {id: 'reportId', type: 'select', label: 'REPORT ID', width: 2, values: DiagnosticsDataHelper.getReportIds(), maxColums: 5}
      , {id: 'h2hPartnerId', type: 'text', label: 'H2H PARTNER ID', width: 2, values: {}, maxColums: 5}
      , {id: 'dropBox', type: 'text', label: 'DROPBOX', width: 2, values: {}, maxColums: 5}
      , {id: 'outputType', type: 'select', label: 'OUTPUT TYPE', width: 2, values: DiagnosticsDataHelper.getOutputTypes(), maxColums: 5}
    ]
  }

  return (
    <div>
      <SearchWidget metadata={metadata} title={'H2H DELIVERY TEMPLATES'} />
    </div>
  );
}

export default H2HDelivery;