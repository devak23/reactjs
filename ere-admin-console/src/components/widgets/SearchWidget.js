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

const makeBadge = results => {
  console.log({results})
  let resultsDontExist = results && results.size === undefined;
  if (resultsDontExist) {
    return ''
  } else if (results.size === 0) {
    return <span className='new badge red' data-badge-caption='records found'>0</span>;
  } else {
    return <span className='new badge green' data-badge-caption='records found'>{results.size}</span>;
  }
}


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
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let datePickers = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datePickers, {});
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects, {
      hover: true,
      constrainWidth: false
    });
  });

  const getColumnsFromMetadata = metadata => {
    let columns = [];
    Object.keys(metadata).forEach(index => {
      metadata[index].forEach(col => columns.push({id: col.id, label: col.label}));
    });
    return columns;
  }

  const renderButtonPanel = (index, maxCols, totalWidth) => {
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
        <div className={`col s${12 - totalWidth}`} key={index + 1} style={{width: '26%'}}>
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
    setShowSpinner(true)
    if (save) {
      console.log('saving the search criteria...');
    }
    // perform the search
    let results = search();
    console.log(results);
    setResults(results);
    // set the results into the results tab
    instance.open(RESULT_PANEL);
    setShowSpinner(false);
  }

  const renderRowData = (row, lastRow) => {
    let rows = [];
    let keys = Object.keys(row);
    let totalWidth = 0;
    keys.forEach((key, index) => {
      let element = row[key];
      totalWidth += element.width;
      rows.push(
        <React.Fragment key={index}>
          <div className={`col s${element.width}`}>
            {element.type === 'text' && makeTextField(element.id, element.label, element.value)}
            {element.type === 'select' && makeDropdown(element.id, element.label, element.values)}
            {element.type === 'date' && makeDateField(element.id, element.label, element.value)}
          </div>
          {index === keys.length -1 && lastRow && renderButtonPanel(index+1, element.maxColums, totalWidth)}
        </React.Fragment>
      );
    });
    return rows;
  }

  /** Build the search screen */
  let gridData = [];
  let keys = Object.keys(metadata);
  keys.forEach((key, index) => {
    let lastRow = (index === keys.length-1);
    gridData.push(<div className='row' key={key}>{renderRowData(metadata[key], lastRow)}</div>);
  });

  const classes = getWidgetStyles();
  const columns = getColumnsFromMetadata(metadata);
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
            {makeBadge(results)}
          </div>
          <div className='collapsible-body'>
            <ResultsWidget data={results} columns={columns} showSpinner={showSpinner}/>
          </div>
        </li>
      </ul>       
    </React.Fragment>
  );
};

export default SearchWidget;
