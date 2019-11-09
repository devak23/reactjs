import React, { Fragment } from 'react';

const RefreshButton = ({ color }) => {
  return (
    <Fragment>
      <a href='#!' className={`btn-floating halfway-fab waves-effect waves-light ${color} darken-1`}>
        <i className='material-icons'>refresh</i>
      </a>
    </Fragment>
  );
};

export default RefreshButton;
