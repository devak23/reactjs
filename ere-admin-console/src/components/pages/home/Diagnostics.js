import React, { useEffect } from 'react';
import M from 'materialize-css';
import { getWidgetStyles } from '../../helpers/StyleHelper';
import SearchWidget from '../../widgets/SearchWidget';
import ResultsWidget from '../../widgets/ResultsWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';

const Diagnostics = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  // const data = [
  //   {id: 'requestId', type: 'text', label: 'REQUEST ID', width: 2, values: {}}
  //   , {id: 'customerId', type: 'text', label: 'CUSTOMER ID', width: 2, values: {}}
  //   , {id: 'startDate', type: 'date', label: 'START DATE', width: 2, values: {}}
  //   , {id: 'reportName', type: 'text', label: 'REPORT NAME', width: 2, values: {}}
  //   , {id: 'outputType', type: 'select', label: 'OUTPUT TYPE', width: 2, values: DiagnosticsDataHelper.getOutputTypes()}
  //   , {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds()}
  //   , {id: 'userId', type: 'text', label: 'USER ID', width: 2, values: {}}
  //   , {id: 'originalReqId', type: 'text', label: 'ORIG. REQUEST ID', width: 2, values: {}}
  //   , {id: 'endDate', type: 'date', label: 'END DATE', width: 2, values: {}}
  //   , {id: 'accountNumber', type: 'text', label: 'ACCOUNT NUMBER', width: 2, values: {}}
  //   , {id: 'reportId', type: 'select', label: 'REPORT ID', width: 2, values: DiagnosticsDataHelper.getReportIds()}
  //   , {id: 'status', type: 'select', label: 'STATUS', width: 2, values: DiagnosticsDataHelper.getStatuses()}
  //   , {id: 'deliveryStatus', type: 'select', label: 'DELIVERY STATUS', width: 2, values: DiagnosticsDataHelper.getDeliveryStatuses()}
  //   , {id: 'retryEnabled', type: 'select', label: 'RETRY ENABLED', width: 2, values: DiagnosticsDataHelper.getYesNoAll()}
  //   , {id: 'scheduled', type: 'select', label: 'SCHEDULED', width: 2, values: DiagnosticsDataHelper.getYesNoAll()}
  // ];

  const data = {
    0: [ {id: 'requestId', type: 'text', label: 'REQUEST ID', width: 2, values: {}}
       , {id: 'customerId', type: 'text', label: 'CUSTOMER ID', width: 2, values: {}}
       , {id: 'startDate', type: 'date', label: 'START DATE', width: 2, values: {}}
       , {id: 'reportName', type: 'text', label: 'REPORT NAME', width: 2, values: {}}
       , {id: 'outputType', type: 'select', label: 'OUTPUT TYPE', width: 2, values: DiagnosticsDataHelper.getOutputTypes()}
       , {id: 'applicationId', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds()}],
    1: [ {id: 'userId', type: 'text', label: 'USER ID', width: 2, values: {}}
       , {id: 'originalReqId', type: 'text', label: 'ORIG. REQUEST ID', width: 2, values: {}}
       , {id: 'endDate', type: 'date', label: 'END DATE', width: 2, values: {}}
       , {id: 'accountNumber', type: 'text', label: 'ACCOUNT NUMBER', width: 2, values: {}}
       , {id: 'reportId', type: 'select', label: 'REPORT ID', width: 2, values: DiagnosticsDataHelper.getReportIds()}
       , {id: 'status', type: 'select', label: 'STATUS', width: 2, values: DiagnosticsDataHelper.getStatuses()}],
    2: [ {id: 'deliveryStatus', type: 'select', label: 'DELIVERY STATUS', width: 2, values: DiagnosticsDataHelper.getDeliveryStatuses()}
       , {id: 'retryEnabled', type: 'select', label: 'RETRY ENABLED', width: 2, values: DiagnosticsDataHelper.getYesNoAll()}
       , {id: 'scheduled', type: 'select', label: 'SCHEDULED', width: 2, values: DiagnosticsDataHelper.getYesNoAll()}]
  }

  const classes = getWidgetStyles();
  return (
    <div>
      <ul className='collapsible active'>
        <li className='active'>
          <div className='collapsible-header'>
            <i className='material-icons'>search</i>
            <span className={classes.title}>SEARCH</span>
          </div>
          <div className='collapsible-body'>
            <SearchWidget data={data}/>
          </div>
        </li>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>format_list_bulleted</i><span className={classes.title}>RESULTS</span>
          </div>
          <div className='collapsible-body'>
            <ResultsWidget />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Diagnostics;
