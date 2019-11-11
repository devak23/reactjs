import React, { useEffect } from 'react';
import M from 'materialize-css';
import { getWidgetStyles } from '../../helpers/StyleHelper';

import SearchWidget from '../../widgets/SearchWidget';
import ResultsWidget from '../../widgets/ResultsWidget';

const Diagnostics = () => {
  useEffect(() => {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {});
  });

  const classes = getWidgetStyles();
  return (
    <div>
      <ul className='collapsible active'>
        <li className='active'>
          <div className={`collapsible-header ${classes.headerBackground}`}>
            <i className='material-icons'>search</i>
            <span className={classes.title}>Search</span>
          </div>
          <div className='collapsible-body'>
            <SearchWidget />
          </div>
        </li>
        <li>
          <div className={`collapsible-header ${classes.headerBackground}`}>
            <i className='material-icons'>format_list_bulleted</i><span className={classes.title}>Results</span>
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
