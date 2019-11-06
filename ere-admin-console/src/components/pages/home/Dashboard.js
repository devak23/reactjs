import React, { Component } from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';

class Dashboard extends Component {
  render() {
    let successData = this.getSuccessData();
    let failureData = this.getFailureData();
    let mixedData = this.getMixedData();

    return (
      <section className=''>
        <div className='row'>
          <div className='col s12 m4'>
            <SummaryWidget data={successData} />
          </div>
          <div className='col s12 m4'>
            <SummaryWidget data={failureData} />
          </div>
          <div className='col s12 m4'>
            <SummaryWidget data={mixedData} />
          </div>
        </div>
      </section>
    );
  }

  getMixedData = () => {
    return [
      {
        status: 'amber',
        metric1: 'Storage',
        value1: '0.33 TB',
      },
      {
        status: 'amber',
        metric1: 'Free Space',
        value1: '0.16TB',
      },
      {
        status: 'amber',
        metric1: 'Occupied',
        value1: '0.17TB',
      }
    ];    
  }

  getFailureData = () => {
    return [
      {
        status: 'deep-orange',
        metric1: 'Reports Failed',
        value1: 367,
        metric2: 'Last Hour',
        value2: 19
      },
      {
        status: 'deep-orange',
        metric1: 'Scheduled',
        value1: 345,
        metric2: 'Last Hour',
        value2: 15
      },
      {
        status: 'deep-orange',
        metric1: 'Adhoc',
        value1: 22,
        metric2: 'Last Hour',
        value2: 4
      }
    ];
  }
  getSuccessData = () => {
    return [
      {
        status: 'teal',
        metric1: 'Reports Run',
        value1: 1026,
        metric2: 'Last Hour',
        value2: 52
      },
      {
        status: 'teal',
        metric1: 'Scheduled',
        value1: 456,
        metric2: 'Last Hour',
        value2: 21
      },
      {
        status: 'teal',
        metric1: 'Adhoc',
        value1: 567,
        metric2: 'Last Hour',
        value2: 31
      }
    ];
  };
}

export default Dashboard;
