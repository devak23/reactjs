import React, { useEffect } from 'react';
import { Duration } from '../helpers/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RefreshButton from '../widgets/RefreshButton';
import M from 'materialize-css';
import { createUseStyles } from 'react-jss';

const getStyles = createUseStyles({
  title: {
    fontFamily: 'Open Sans Condensed',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: '1rem',
  },
  collapsibleHeader: {
    backgroundColor: '#f7f5f5'
  },
});

const ListWidget = ({ data }) => {
  useEffect(() => {
    let elements = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elements, {
      accordion: true,
      inDuration: Duration.IN_DURATION,
      outDuration: Duration.OUT_DURATION
    });
  });

  const classes = getStyles();
  let elements = [];

  data.forEach((e, i) => {
    elements.push(
      <li className='active' key={i}>
        <div className={`collapsible-header ${classes.collapsibleHeader}`}>
          <i className='material-icons'>
            <FontAwesomeIcon icon={e.display.icon} size={e.display.size} color={e.display.color} />
          </i>
          <div className={classes.title}>{e.title}</div>
          <a href='#!' style={{marginTop: '0.2rem'}}><i className="material-icons">refresh</i></a>
        </div>
        <div className='collapsible-body'>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </span>
        </div>
      </li>
    );
  });

  return <ul className='collapsible popout'>
    {elements}
  </ul>;
};

export default ListWidget;
