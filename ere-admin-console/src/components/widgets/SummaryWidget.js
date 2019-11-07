import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Status } from '../helpers/Utils';
import { faCheckCircle, faHdd, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

class SummaryWidget extends Component {
  data = {
    statuses: [
      { code: Status.RED, displayIcon: faExclamationTriangle, color: '#ff5722 ' },
      { code: Status.AMBER, displayIcon: faHdd, color: '#795548' },
      { code: Status.GREEN, displayIcon: faCheckCircle, color: '#43a047' }
    ]
  };

  render() {
    let data = this.props.data;
    let status = data[0].status;
    let statusObj = this.data.statuses.filter(item => item.code === status)[0];
    return (
      <Fragment>
        <div className='card horizontal'>
          <div className='card-image'>
            <FontAwesomeIcon icon={statusObj.displayIcon} size='6x' color={statusObj.color} />
          </div>
          <div className='card-stacked'>
            <div className='card-content'>
              <div className='dash-card-title'>
                {data[0].metric1} - {data[0].value1}
              </div>
              <p className='title'>
                {data[0].metric2} - {data[0].value2}
              </p>
              <div id='detailBox'>
                <div id='left'>
                  <p className='title'>{data[1].metric1}</p>
                  <p>{data[1].value1}</p>
                  <p className='title'>{data[2].metric1}</p>
                  <p>{data[2].value1}</p>
                </div>
                <div className='divider'></div>
                <div id='right'>
                  <p className='title'>{data[1].metric2}</p>
                  <p>{data[1].value2}</p>
                  <p className='title'>{data[2].metric2}</p>
                  <p>{data[2].value2}</p>
                </div>
              </div>
            </div>
            <a className='btn-floating halfway-fab waves-effect waves-light blue darken-2'>
              <i className='material-icons'>refresh</i>
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SummaryWidget;
