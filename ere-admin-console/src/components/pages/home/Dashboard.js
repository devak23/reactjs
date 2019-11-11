import React  from 'react';
import SummaryWidget from '../../widgets/SummaryWidget';
import ListWidget from '../../widgets/ListWidget';
import DashboardDataHelper from '../../datahelper/DashboardDataHelper';

const Dashboard = () => {
  // const [failureSummaryData, setFailureSummaryData] = useState({});
  // const [successSummaryData, setSuccessSummaryData] = useState({});
  // const [storageSummaryData, setStorageSummaryData] = useState({});
  // const [engineAndSchedulerData, setEngineAndSchedulerData] = useState({});
  // const [failedReportsData, setFailedReportsData] = useState({});

  // useEffect(() => {
  //   setFailureSummaryData();
  //   setSuccessSummaryData();
  //   setStorageSummaryData();
  //   setEngineAndSchedulerData();
  //   setFailedReportsData();
  // })

  const failureSummaryData = DashboardDataHelper.getFailureSummaryData();
  const successSummaryData = DashboardDataHelper.getSuccessSummaryData();
  const storageSummaryData = DashboardDataHelper.getStorageSummaryData();
  const engineAndSchedulerData = DashboardDataHelper.getEngineAndSchedulerData();
  const failedReportsData = DashboardDataHelper.getFailedReportsData();

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
