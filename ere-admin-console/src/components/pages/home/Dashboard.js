import React from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';
import ListWidget from '../../widgets/ListWidget';
import { Status } from '../../helpers/Utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown, faClock, faFrownOpen, faPauseCircle, faPlayCircle, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

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

const getEnginesData = () => {
  return {
    display: {
      icon: faNetworkWired,
      size: '1x',
      color: '#757575',
    },
    refresh: true,
    detailsSize: 2,
    title:'ENGINE HEALTH',
    columns : [
      { id: 'hostname', label: 'HOSTNAME'},
      { id: 'runningTasks', label: 'RUNNING TASKS'}, 
      { id: 'totalTasks', label: 'TOTAL TASKS'}, 
    ],     
    details: [
      {hostname: 'vsin10p6703', runningTasks: 1, totalTasks: 213},
      {hostname: 'vsin10p6704', runningTasks: 0, totalTasks: 178},
    ]
  }
}

const getSchedulerData = () => {
  return {
    display: {
      icon: faClock,
      size: '1x',
      color: '#757575',
    },
    refresh: true,
    detailsSize: 2,
    title:'SCHEDULER HEALTH',
    columns : [
      { id: 'hostname', label: 'HOSTNAME'},
      { id: 'action', label: 'ACTION'}, 
    ],     
    details: [
      {hostname: 'vsin10p6703', action: <a href='#!'><FontAwesomeIcon icon={faPauseCircle} size={'2x'} /></a>},
      {hostname: 'vsin10p6704', action: <a href='#!'><FontAwesomeIcon icon={faPlayCircle} size={'2x'} /></a>}
    ]
  }
}

const getEngineData = () => [getEnginesData(), getSchedulerData()];

const getFailedReportsData = () => [getFailedReportsByDay(), getFailedReportsByHour()]

const getFailedReportsByDay = () => {
  return {
    display: {
      icon: faFrownOpen,
      size: '1x',
      color: '#7c7c7c',
    },    
    refresh: true,
    title: 'FAILURES PER DAY',
    columns : [
      { id: 'detailId', label: 'ERROR DETAIL'},
      { id: 'entityValue', label: 'LAST DAY'}, 
    ],    
    details: [{
        'detailId': 'migrationDate=2019-8-',
        'entityValue': 2
      },{
        'detailId': 'IRIS REQUEST ID = 1006128403',
        'entityValue': 1
      },{
        'detailId': 'migrationDate=07/01/2019;migrationDays=63;transitio',
        'entityValue': 1
      },{
        'detailId': 'IRIS REQUEST ID = 1006128559',
        'entityValue': 1
      },{
        'detailId': 'IRIS REQUEST ID = 1006128559',
        'entityValue': 1
      },{
        'detailId': 'BT010: BIRT Engine task failed',
        'entityValue': 5
      },{
        'detailId': 'BT017: Error in VAM Data Source Balance Interest',
        'entityValue': 27
      },{
        'detailId': 'DATA ERROR: Admin Center Response Failed',
        'entityValue': 12
      },{
        'detailId': 'Error.ReportRunError: Error happened while running the report',
        'entityValue': 1
      }
    ]
  };
};
const getFailedReportsByHour = () => {
  return {
    display: {
      icon: faFrown,
      size: '1x',
      color: '#7c7c7c',
    },    
    refresh: true,
    title: 'FAILURES PER HOUR',
    columns: [
      { id: 'detailId', label: 'ERROR DETAIL'},
      { id: 'entityValue', label: 'LAST HOUR'}, 
    ],    
    details: [
      {
        'detailId': 'migrationDate=2019-8-',
        'entityValue': 2
      },{
        'detailId': 'IRIS REQUEST ID = 1006128403',
        'entityValue': 1
      },{
        'detailId': 'migrationDate=07/01/2019;migrationDays=63;transitio',
        'entityValue': 1
      },{
        'detailId': 'IRIS REQUEST ID = 1006128559',
        'entityValue': 1
      },{
        'detailId': 'IRIS REQUEST ID = 1006128559',
        'entityValue': 1
      },{
        'detailId': 'BT010: BIRT Engine task failed',
        'entityValue': 5
      },{
        'detailId': 'BT017: Error in VAM Data Source Balance Interest',
        'entityValue': 27
      },{
        'detailId': 'DATA ERROR: Admin Center Response Failed',
        'entityValue': 12
      },{
        'detailId': 'Error.ReportRunError: Error happened while running the report',
        'entityValue': 1
      }
    ]
  };
};

export default Dashboard;
