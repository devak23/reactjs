import React from 'react';
import NoDataFound from './NoDataFound';
import Spinner from './Spinner';

const ResultsWidget = ({ data, metadata, showSpinner }) => {
  return (
    <div>
      {showSpinner && <Spinner />}
      {data && !data.size && <NoDataFound message={data.message} />}
    </div>
  );
}

export default ResultsWidget;
