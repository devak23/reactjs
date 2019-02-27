import React from 'react';

const MessageBox = () => (
  <div className=''>
    <div className='row'>
      <div className='col s12 m6 input-field'>
        <input id='author' type='text' id='author' />
        <label for='author'>Your Name</label>
      </div>
      <div className='col s12 m6'>
        <button className='btn blue'>Send</button>
      </div>
    </div>
  </div>
);

export default MessageBox;
