import React, { useEffect } from 'react';
import ReportsTemplateDataHelper from '../../datahelper/ReportsTemplateDataHelper';
import DiagnosticsDataHelper from '../../datahelper/DiagnosticsDataHelper';
import SearchWidget from '../../widgets/SearchWidget';
import M from 'materialize-css';

const ReportTemplates = () => {
	useEffect(() => {
		M.Collapsible.init(document.querySelectorAll('.collapsible'), {});
	});

	const metadata = {
		0: [
			{
				id: 'applicationId',
				type: 'select',
				label: 'APPLICATION',
				width: 2,
				values: DiagnosticsDataHelper.getApplicationIds(),
				maxColums: 5
			},
			{
				id: 'deliveryType',
				type: 'select',
				label: 'DELIVERY TYPE',
				width: 2,
				values: ReportsTemplateDataHelper.getDeliveryTypes(),
				maxColums: 5
			},
			{ id: 'templateName', type: 'text', label: 'TEMPLATE NAME', width: 2, values: {}, maxColums: 5 },
			{ id: 'createdBy', type: 'text', label: 'CREATED BY', width: 2, values: {}, maxColums: 5 },
			{
				id: 'status',
				type: 'select',
				label: 'OUTPUT TYPE',
				width: 2,
				values: ReportsTemplateDataHelper.getDeliveryStatus(),
				maxColums: 5
			}
		]
	};

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
			<SearchWidget metadata={metadata} title={'REPORT TEMPLATES'} search={search} />
		</div>
	);
};

export default ReportTemplates;
