import React from 'react';

import NoDataFound from './NoDataFound';

const ResultsWidget = ({ data }) => {
	return <div>{data && !data.size && <NoDataFound message={data.message} />}</div>;
};

export default ResultsWidget;
