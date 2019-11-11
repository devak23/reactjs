import React, { useEffect } from 'react';
import M from 'materialize-css';
import DiagnosticsDataHelper from '../datahelper/DiagnosticsDataHelper';
import { Duration } from '../helpers/Utils';

const makeTextField = (id, label) => (
  <div className='input-field'>
    <input id={id} type='text' />
    <label htmlFor={id}>{label}</label>
  </div>
);

const makeDateField = (id, label) => (
  <div className='input-field'>
    <i className='material-icons prefix'>date_range</i>
    <input type='text' className='datepicker' id={id} />
    <label htmlFor={id}>{label}</label>
  </div>
);

const makeDropdown = (id, label, data) => {
  let options = [];
  Object.keys(data).forEach(key =>
    options.push(
      <option key={key} value={key}>
        {data[key]}
      </option>
    )
  );

  let dropDown = (
    <div className='input-field'>
      <select id={id}>{options}</select>
      <label>{label}</label>
    </div>
  );
  return dropDown;
};

const SearchWidget = ({ noOfColumns }) => {
  useEffect(() => {
    let datePickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePickers, {});
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {
      hover: true,
      constrainWidth: false
    });
  });

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col s1'>{makeTextField('requestId', 'REQUEST ID')}</div>
        <div className='col s2'>{makeTextField('customerId', 'CUSTOMER ID')}</div>
        <div className='col s2'>{makeDateField('startDate', 'START DATE')}</div>
        <div className='col s2'>{makeTextField('reportName', 'REPORT NAME')}</div>
        <div className='col s2'>
          {makeDropdown('outputType', 'OUTPUT TYPE', DiagnosticsDataHelper.getOutputTypes())}
        </div>
        <div className='col s2'>
          {makeDropdown('applicationId', 'APPLICATION', DiagnosticsDataHelper.getApplicationIds())}
        </div>
        <div className='col s1'>
          {makeDropdown('deliveryStatus', 'DELIVERY', DiagnosticsDataHelper.getDeliveryStatuses())}
        </div>
      </div>
      <div className='row'>
        <div className='col s1'>{makeTextField('userID', 'USER ID')}</div>
        <div className='col s2'>{makeTextField('originalRequestId', 'ORIG. REQUEST ID')}</div>
        <div className='col s2'>{makeDateField('endDate', 'END DATE')}</div>
        <div className='col s2'>{makeTextField('accountNumber', 'ACCOUNT NUMBER')}</div>
        <div className='col s2'>{makeDropdown('reportId', 'REPORT ID', DiagnosticsDataHelper.getReportIds())}</div>
        <div className='col s2'>{makeDropdown('status', 'STATUS', DiagnosticsDataHelper.getStatuses())}</div>
        <div className='col s1'>{makeDropdown('scheduled', 'SCHEDULED', DiagnosticsDataHelper.getYesNoAll())}</div>
      </div>
      <div className='right'>
        <a class='waves-effect waves-light btn' style={{ marginLeft: 10 }}>
          Search
        </a>
      </div>
      <div style={{ clear: 'both' }}></div>
    </React.Fragment>
  );
};

export default SearchWidget;
