import React, { useEffect } from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';
import ListWidget from '../../widgets/ListWidget';
import DashboardDataHelper from '../../datahelper/DashboardDataHelper';

const Dashboard = () => {
  let successSummaryData = null;
  let failureSummaryData = null;
  let storageSummaryData = null;
  let engineAndSchedulerData = null;
  let failedReportsData = null;
  
  useEffect(() => {
    failureSummaryData = DashboardDataHelper.getFailureSummaryData();
    successSummaryData = DashboardDataHelper.getSuccessSummaryData();
    storageSummaryData = DashboardDataHelper.getStorageSummaryData();

    engineAndSchedulerData = DashboardDataHelper.getEngineAndSchedulerData();
    failedReportsData = DashboardDataHelper.getFailedReportsData();

  });

  return (
    <section>
      <div className='row'>
        <div className='col s12 m4'>
          <SummaryWidget data={successSummaryData} />
        </div>
        <div className='col s12 m4'>
          <SummaryWidget data={failureSummaryData} />
        </div>
        <div className='col s12 m4'>
          <SummaryWidget data={storageSummaryData} />
        </div>
      </div>
      <div className='row'>
        <div className='col s12 m6'>
          <ListWidget data={failedReportsData} />
        </div>
        <div className='col s12 m6'>
          <ListWidget data={engineAndSchedulerData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
