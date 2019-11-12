import React, { useEffect } from 'react';
import M from 'materialize-css';
import SearchWidget from '../../widgets/SearchWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';

const Diagnostics = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  const data = {
    0: [ {id: 'requestId', type: 'text', label: 'REQUEST ID', width: 2, values: {}, maxColums: 6}
       , {id: 'customerId', type: 'text', label: 'CUSTOMER ID', width: 2, values: {}, maxColums: 6}
       , {id: 'startDate', type: 'date', label: 'START DATE', width: 2, values: {}, maxColums: 6}
       , {id: 'reportName', type: 'text', label: 'REPORT NAME', width: 2, values: {}, maxColums: 6}
       , {id: 'outputType', type: 'select', label: 'OUTPUT TYPE', width: 2, values: DiagnosticsDataHelper.getOutputTypes(), maxColums: 6}
       , {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds(), maxColums: 6}],
    1: [ {id: 'userId', type: 'text', label: 'USER ID', width: 2, values: {}, maxColums: 6}
       , {id: 'originalReqId', type: 'text', label: 'ORIG. REQUEST ID', width: 2, values: {}, maxColums: 6}
       , {id: 'endDate', type: 'date', label: 'END DATE', width: 2, values: {}, maxColums: 6}
       , {id: 'accountNumber', type: 'text', label: 'ACCOUNT NUMBER', width: 2, values: {}, maxColums: 6}
       , {id: 'reportId', type: 'select', label: 'REPORT ID', width: 2, values: DiagnosticsDataHelper.getReportIds(), maxColums: 6}
       , {id: 'status', type: 'select', label: 'STATUS', width: 2, values: DiagnosticsDataHelper.getStatuses(), maxColums: 6}],
    2: [ {id: 'deliveryStatus', type: 'select', label: 'DELIVERY STATUS', width: 2, values: DiagnosticsDataHelper.getDeliveryStatuses(), maxColums: 6}
       , {id: 'retryEnabled', type: 'select', label: 'RETRY ENABLED', width: 2, values: DiagnosticsDataHelper.getYesNoAll(), maxColums: 6}
       , {id: 'scheduled', type: 'select', label: 'SCHEDULED', width: 2, values: DiagnosticsDataHelper.getYesNoAll(), maxColums: 6}]
  }

  return (
    <div>
      <SearchWidget data={data}  title={'DIAGNOSTICS'}/>
    </div>
  );
};

export default Diagnostics;
