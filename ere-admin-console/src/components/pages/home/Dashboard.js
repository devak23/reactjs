import React from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';
import ListWidget from '../../widgets/ListWidget';
import { Status } from '../../helpers/Utils';

const Dashboard = () => {
  let successData = getSuccessData();
  let failureData = getFailureData();
  let mixedData = getMixedData();

  return (
    <section>
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
      <div className='row'>
        <div className='col s12 m6'>
          <ListWidget />
        </div>
        <div className='col s12 m6'>
          <ListWidget />
        </div>
      </div>
    </section>
  );
};

const getMixedData = () => {
  return [
    {
      status: Status.AMBER,
      metric1: 'Storage',
      value1: '0.33 TB'
    },
    {
      status: Status.AMBER,
      metric1: 'Free Space',
      value1: '0.16TB'
    },
    {
      status: Status.AMBER,
      metric1: 'Occupied',
      value1: '0.17TB'
    }
  ];
};

const getFailureData = () => {
  return [
    {
      status: Status.RED,
      metric1: 'Reports Failed',
      value1: 367,
      metric2: 'Last Hour',
      value2: 19
    },
    {
      status: Status.RED,
      metric1: 'Scheduled',
      value1: 345,
      metric2: 'Last Hour',
      value2: 15
    },
    {
      status: Status.RED,
      metric1: 'Adhoc',
      value1: 22,
      metric2: 'Last Hour',
      value2: 4
    }
  ];
};
const getSuccessData = () => {
  return [
    {
      status: Status.GREEN,
      metric1: 'Reports Run',
      value1: 1026,
      metric2: 'Last Hour',
      value2: 52
    },
    {
      status: Status.GREEN,
      metric1: 'Scheduled',
      value1: 456,
      metric2: 'Last Hour',
      value2: 21
    },
    {
      status: Status.GREEN,
      metric1: 'Adhoc',
      value1: 567,
      metric2: 'Last Hour',
      value2: 31
    }
  ];
};

export default Dashboard;
