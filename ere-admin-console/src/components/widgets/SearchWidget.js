import React, { useEffect } from 'react';
import M from 'materialize-css';

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

const makeDropdown = (id, label, optionsData) => {
  let options = [];
  Object.keys(optionsData).forEach(key =>
    options.push(
      <option key={key} value={key}>
        {optionsData[key]}
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


const SearchWidget = ({ data }) => {
  useEffect(() => {
    let datePickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePickers, {});
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {
      hover: true,
      constrainWidth: false
    });
  });

  const renderButtonPanel = () => (
    <div className='col s6' key={gridData.length + 1}>
      <a href='#!' onClick={handleSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
        Search
      </a>
      <a href='#!' onClick={handleSaveSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
        Save and Search
      </a>
    </div>    
  );

  const handleSearch = () => console.log('Search Button is clicked');
  
  const handleSaveSearch = () => console.log('Save and Search Button is clicked');

  const renderRowData = (row, lastRow) => {
    let rows = [];
    let keys = Object.keys(row);
    keys.forEach((key, index) => {
      let element = row[key];
      rows.push(
        <React.Fragment key={index}>
          <div className="col s2">
            {element.type === 'text' && makeTextField(element.id, element.label, element.value)}
            {element.type === 'select' && makeDropdown(element.id, element.label, element.values)}
            {element.type === 'date' && makeDateField(element.id, element.label, element.value)}
          </div>
          {index === keys.length -1 && lastRow && renderButtonPanel()}
        </React.Fragment>
      );
    });
    return rows;
  }

  let gridData = [];
  let keys = Object.keys(data);
  keys.forEach((key, index) => {
    let lastRow = (index === keys.length-1);
    gridData.push(<div className='row' key={key}>{renderRowData(data[key], lastRow)}</div>);
  });

  return (
    <React.Fragment>
      {gridData}
      {/* <div className='row'>
        <div className='col s2'>{makeTextField('requestId', 'REQUEST ID')}</div>
        <div className='col s2'>{makeTextField('customerId', 'CUSTOMER ID')}</div>
        <div className='col s2'>{makeDateField('startDate', 'START DATE')}</div>
        <div className='col s2'>{makeTextField('reportName', 'REPORT NAME')}</div>
        <div className='col s2'>
          {makeDropdown('outputType', 'OUTPUT TYPE', DiagnosticsDataHelper.getOutputTypes())}
        </div>
        <div className='col s2'>
          {makeDropdown('applicationId', 'APPLICATION', DiagnosticsDataHelper.getApplicationIds())}
        </div>
      </div>
      <div className='row'>
        <div className='col s2'>{makeTextField('userID', 'USER ID')}</div>
        <div className='col s2'>{makeTextField('originalRequestId', 'ORIG. REQUEST ID')}</div>
        <div className='col s2'>{makeDateField('endDate', 'END DATE')}</div>
        <div className='col s2'>{makeTextField('accountNumber', 'ACCOUNT NUMBER')}</div>
        <div className='col s2'>{makeDropdown('reportId', 'REPORT ID', DiagnosticsDataHelper.getReportIds())}</div>
        <div className='col s2'>{makeDropdown('status', 'STATUS', DiagnosticsDataHelper.getStatuses())}</div>
      </div>
      <div className='row'>
        <div className='col s2'>
          {makeDropdown('deliveryStatus', 'DELIVERY STATUS', DiagnosticsDataHelper.getDeliveryStatuses())}
        </div>
        <div className='col s2'>{makeDropdown('retryEnabled', 'RETRY', DiagnosticsDataHelper.getYesNoAll())}</div>
        <div className='col s2'>{makeDropdown('scheduled', 'SCHEDULED', DiagnosticsDataHelper.getYesNoAll())}</div>
        <div className='col s6'>
          <a href='#!' onClick={handleSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
            Search
          </a>
          <a href='#!' onClick={handleSaveSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
            Save and Search
          </a>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default SearchWidget;
