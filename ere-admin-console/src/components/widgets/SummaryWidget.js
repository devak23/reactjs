import React, { Component, Fragment } from 'react';

class SummaryWidget extends Component {
  data = {
    statuses: [
      { code: 'deep-orange', icon: 'report_problem', color: 'deep-orange' },
      { code: 'amber', icon: 'report', color: 'amber' },
      { code: 'teal', icon: 'insert_drive_file', color: 'teal' }
    ]
  };

  render() {
    let data = this.props.data;
    let status = data[0].status;
    let statusObj = this.data.statuses.filter(item => item.code === status)[0];
    let cardImageClass = `material-icons large ${statusObj.color}-text darken-6`;
    return (
      <Fragment>
        <div className='card horizontal'>
          <div className='card-image'>{statusObj && <i className={cardImageClass}>{statusObj.icon}</i>}</div>
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
