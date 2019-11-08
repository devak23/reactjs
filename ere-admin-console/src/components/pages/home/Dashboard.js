import React from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';
import ListWidget from '../../widgets/ListWidget';
import { Status } from '../../helpers/Utils';
import { faFrown, faServer } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  let summarySuccessData = getSummarySuccessData();
  let summaryFailureData = getSummaryFailureData();
  let summaryStorageData = getStorageSummaryData();
  let engineData = getEngineData();
  let failedReportData = getFailedReportsData();

  return (
    <section>
      <div className='row'>
        <div className='col s12 m4'>
          <SummaryWidget data={summarySuccessData} />
        </div>
        <div className='col s12 m4'>
          <SummaryWidget data={summaryFailureData} />
        </div>
        <div className='col s12 m4'>
          <SummaryWidget data={summaryStorageData} />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <ListWidget data={failedReportData} />
        </div>
        <div className='col s12 m6'>
          <ListWidget data={engineData} />
        </div>
      </div>
    </section>
  );
};

const getStorageSummaryData = () => {
  return [
    {
      status: Status.AMBER,
      metric1: 'Storage',
      value1: '0.33 TB'
    },{
      status: Status.AMBER,
      metric1: 'Free Space',
      value1: '0.16TB'
    },{
      status: Status.AMBER,
      metric1: 'Occupied',
      value1: '0.17TB'
    }
  ];
};
const getSummaryFailureData = () => {
  return [
    {
      status: Status.RED,
      metric1: 'Reports Failed',
      value1: 367,
      metric2: 'Last Hour',
      value2: 19
    },{
      status: Status.RED,
      metric1: 'Scheduled',
      value1: 345,
      metric2: 'Last Hour',
      value2: 15
    },{
      status: Status.RED,
      metric1: 'Adhoc',
      value1: 22,
      metric2: 'Last Hour',
      value2: 4
    }
  ];
};
const getSummarySuccessData = () => {
  return [
    {
      status: Status.GREEN,
      metric1: 'Reports Run',
      value1: 1026,
      metric2: 'Last Hour',
      value2: 52
    },{
      status: Status.GREEN,
      metric1: 'Scheduled',
      value1: 456,
      metric2: 'Last Hour',
      value2: 21
    },{
      status: Status.GREEN,
      metric1: 'Adhoc',
      value1: 567,
      metric2: 'Last Hour',
      value2: 31
    }
  ];
};
const getEngineData = () => {
  return {
    display: {
      icon: faServer,
      size: '1x',
      color: '#006064',
    },
    refresh: true,
    detailsSize: 2,
    title:'Engines',
    details: [

    ]
  }
};

const getFailedReportsData = () => {
  return {
    display: {
      icon: faFrown,
      size: '1x',
      color: '#ff9800',
    },    
    refresh: true,
    detailsSize: 2,
    title: 'Reports Failed with errors',
    detailsByDay: [{
        'Error Detail': 'migrationDate=2019-8-',
        'Last Day': 2
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128403',
        'Last Day': 1
      },{
        'Error Detail': 'migrationDate=07/01/2019;migrationDays=63;transitio',
        'Last Day': 1
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128559',
        'Last Day': 1
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128559',
        'Last Day': 1
      },{
        'Error Detail': 'BT010: BIRT Engine task failed',
        'Last Day': 5
      },{
        'Error Detail': 'BT017: Error in VAM Data Source Balance Interest',
        'Last Day': 27
      },{
        'Error Detail': 'DATA ERROR: Admin Center Response Failed',
        'Last Day': 12
      },{
        'Error Detail': 'Error.ReportRunError: Error happened while running the report',
        'Last Day': 1
      }
    ],
    detailsByHour: [
      {
        'Error Detail': 'migrationDate=2019-8-',
        'Last Hour': 2
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128403',
        'Last Hour': 1
      },{
        'Error Detail': 'migrationDate=07/01/2019;migrationDays=63;transitio',
        'Last Hour': 1
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128559',
        'Last Hour': 1
      },{
        'Error Detail': 'IRIS REQUEST ID = 1006128559',
        'Last Hour': 1
      },{
        'Error Detail': 'BT010: BIRT Engine task failed',
        'Last Hour': 5
      },{
        'Error Detail': 'BT017: Error in VAM Data Source Balance Interest',
        'Last Hour': 27
      },{
        'Error Detail': 'DATA ERROR: Admin Center Response Failed',
        'Last Hour': 12
      },{
        'Error Detail': 'Error.ReportRunError: Error happened while running the report',
        'Last Hour': 1
      }
    ]
  };
};

export default Dashboard;
