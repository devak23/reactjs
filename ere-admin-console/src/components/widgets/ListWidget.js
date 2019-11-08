import React, { useEffect } from 'react';
import { Duration } from '../helpers/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import M from 'materialize-css';

const ListWidget = ({data}) => {
  useEffect(() => {
    let elements = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elements, {
      accordion: true,
      inDuration: Duration.IN_DURATION,
      outDuration: Duration.OUT_DURATION
    });
  });

  return (
    <ul className='collapsible'>
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>
            <FontAwesomeIcon icon={data.display.icon} size={data.display.size} color={data.display.color}/>
          </i>
          {data.title}
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
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>place</i>Second
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
      <li>
        <div className='collapsible-header'>
          <i className='material-icons'>whatshot</i>Third
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
    </ul>
  );
};

export default ListWidget;
