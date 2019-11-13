import React, { useEffect, useState } from 'react';
import { getWidgetStyles } from '../helpers/StyleHelper';
import ResultsWidget from './ResultsWidget';
import M from 'materialize-css';

const SEARCH_PANEL = 0;
const RESULT_PANEL = 1;

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


const SearchWidget = ({ metadata, title, search }) => {
  const [results, setResults] = useState({});
  useEffect(() => {
    let datePickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePickers, {});
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {
      hover: true,
      constrainWidth: false
    });
  });

  const renderButtonPanel = (index, maxCols, width) => {
    let requiresRow = (index === maxCols)
    if (requiresRow) {
      return (
        <div className="row">
          <div className='col s10' key={index + 1}>
            <a href='#!' onClick={handleSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
              Search
            </a>
            <a href='#!' onClick={handleSaveSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
              Save and Search
            </a>
          </div>
        </div>
      )
    } else {
      return (
        <div className={`col s${12- index * width}`} key={index + 1}>
          <a href='#!' onClick={handleSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
            Search
          </a>
          <a href='#!' onClick={handleSaveSearch} className='waves-effect waves-light btn red lighten-1 right' style={{ marginLeft: 10, marginTop: 20 }}>
            Save and Search
          </a>
        </div>
      )
    }
  }

  const handleSearch = () => doClick();
  
  const handleSaveSearch = () => doClick(true);

  const doClick = (save) => {
    //get the instance of collapsible
    let instance = M.Collapsible.getInstance(document.querySelector('.collapsible'));
    instance.close(SEARCH_PANEL);
    if (save) {
      console.log('saving the search criteria...');
    }
    // perform the search
    let results = search();
    console.log(results);
    setResults(results);
    // set the results into the results tab
    instance.open(RESULT_PANEL);
  }

  const renderRowData = (row, lastRow) => {
    let rows = [];
    let keys = Object.keys(row);
    keys.forEach((key, index) => {
      let element = row[key];
      rows.push(
        <React.Fragment key={index}>
          <div className={`col s${element.width}`}>
            {element.type === 'text' && makeTextField(element.id, element.label, element.value)}
            {element.type === 'select' && makeDropdown(element.id, element.label, element.values)}
            {element.type === 'date' && makeDateField(element.id, element.label, element.value)}
          </div>
          {index === keys.length -1 && lastRow && renderButtonPanel(index+1, element.maxColums, element.width)}
        </React.Fragment>
      );
    });
    return rows;
  }

  let gridData = [];
  let keys = Object.keys(metadata);
  keys.forEach((key, index) => {
    let lastRow = (index === keys.length-1);
    gridData.push(<div className='row' key={key}>{renderRowData(metadata[key], lastRow)}</div>);
  });

  const classes = getWidgetStyles();
  return (
    <React.Fragment>
      <ul className='collapsible'>
        <li className='active'>
          <div className='collapsible-header'>
            <i className='material-icons'>search</i>
            <span className={classes.title}>SEARCH  {title}</span>
          </div>
          <div className='collapsible-body'>
          {gridData}
          </div>
        </li>
        <li>
          <div className='collapsible-header'>
            <i className='material-icons'>format_list_bulleted</i><span className={classes.title}>RESULTS</span>
          </div>
          <div className='collapsible-body'>
            <ResultsWidget data={results}/>
          </div>
        </li>
      </ul>       
    </React.Fragment>
  );
};

export default SearchWidget;
