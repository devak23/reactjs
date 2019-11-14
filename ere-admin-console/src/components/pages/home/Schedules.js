import React, { useEffect } from 'react';
import M from 'materialize-css';
import SearchWidget from '../../widgets/SearchWidget';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import SchedulesDataHelper from '../../datahelper/SchedulesDataHelper';

const Schedules = () => {
	useEffect(() => {
		let elems = document.querySelectorAll('.collapsible');
		M.Collapsible.init(elems, {});
	});

  const metadata = {
    0: [
      { id: 'jobName', type: 'text', label: 'JOB NAME', width: 2, values: {}, maxColums: 5 }
      , { id: 'customerId', type: 'text', label: 'CUSTOMER ID', width: 2, values: {}, maxColums: 5 }
      , { id: 'startDate', type: 'date', label: 'START DATE', width: 2, values: {}, maxColums: 5 }
      , { id: 'scheduleType', type: 'select', label: 'SCHEDULE TYPE', width: 2, values: SchedulesDataHelper.getScheduleTypes(), maxColums: 5 }
      , { id: 'application', type: 'select', label: 'APPLICATION', width: 2, values: DiagnosticsDataHelper.getApplicationIds() ,maxColums: 5 }
    ],
    1: [
      { id: 'jobGroup', type: 'text', label: 'JOB GROUP', width: 2, values: {}, maxColums: 5 }
      , { id: 'userId', type: 'text', label: 'USER ID', width: 2, values: {}, maxColums: 5 }
      , { id: 'endDate', type: 'date', label: 'END DATE', width: 2, values: {}, maxColums: 5 }
      , { id: 'status', type: 'select', label: 'STATUS', width: 1, values: SchedulesDataHelper.getScheduleStatuses(), maxColums: 5 }
    ]
  }

	const search = (params) => {
		console.log({ params });
		return {
			size: 0,
			results: {},
			message: 'No data found for the given param search. Please modify the search criteria and try again'
		};
  };
    
  return (
		<div>
			<SearchWidget metadata={metadata} title={'SCHEDULES'} search={search} />
		</div>
  )
}

export default Schedules;