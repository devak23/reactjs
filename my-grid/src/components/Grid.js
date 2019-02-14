import React from 'react';
import injectSheet from 'react-jss';

const rules = {
  bordered: {
    border: '1px solid #cecece'
  },
  withWidth: {
    minWidth: '500px',
    maxWidth: '600px'
  }
};

const Grid = ({ classes, data }) => {
  console.table(data);
  return (
    <div className=''>
      <h4 className='indigo-text text-darken-4'>My Grid</h4>
      <div className={`${classes.bordered} ${classes.withWidth}`}>
        <div className='row'>
          <div className='col'>id</div>
          <div className='col'>name</div>
          <div className='col'>username</div>
          <div className='col'>email</div>
          <div className='col'>address</div>
          <div className='col'>phone</div>
          <div className='col'>website</div>
          <div className='col'>company</div>
        </div>
      </div>
    </div>
  );
};

export default injectSheet(rules)(Grid);
