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
    <input type="text" class="datepicker" id={id} />
    <label htmlFor={id}>{label}</label>
  </div>
);

const SearchWidget = ({ noOfColumns }) => {
  useEffect(() => {
    var elems = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {});
  });

  return (
    <div className='row'>
      <div className='col s1'>{makeTextField('requestId', 'Request Id')}</div>
      <div className='col s2'>{makeTextField('customerId', 'Customer Id')}</div>
      <div className='col s2'>{makeTextField('reportName', 'Report Name')}</div>
      <div className='col s2'>{makeDateField('startDate', 'Start Date')}</div>
      <div className='col s1'></div>
      <div className='col s1'></div>
      <div className='col s1'></div>
      <div className='col s1'>{makeDateField('endDate', 'End Date')}</div>
    </div>
  );
};

export default SearchWidget;
