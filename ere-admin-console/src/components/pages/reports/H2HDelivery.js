import React, { useEffect } from 'react'
import SearchWidget from '../../widgets/SearchWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import M from 'materialize-css';


const H2HDelivery = () => {
  useEffect(() => {
    M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
  });

  const data = {
    0: [ {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds()}
      , {id: 'reportId', type: 'select', label: 'REPORT ID', width: 2, values: DiagnosticsDataHelper.getReportIds()}
      , {id: 'h2hPartnerId', type: 'text', label: 'H2H PARTNER ID', width: 2, values: {}}
      , {id: 'dropBox', type: 'text', label: 'DROPBOX', width: 2, values: {}}
      , {id: 'outputType', type: 'select', label: 'OUTPUT TYPE', width: 2, values: DiagnosticsDataHelper.getOutputTypes()}
    ]
  }

  return (
    <div>
      <SearchWidget data={data} />
    </div>
  );
}

export default H2HDelivery;