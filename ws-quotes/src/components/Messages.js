import React from 'react';
import MessageBox from './MessageBox.js';
import MessageSearch from './MessageSearch.js';

class Messages extends React.Component {
  render() {
    const renderMessages = 'Abhay says: Hi';
    return (
      <div className='container' style={{ marginTop: 20 }}>
        <div className='row'>
          <div className='col s12 m5'>
            <MessageBox />
          </div>
          <div className='col s12 m5 offset-m2'>
            <MessageSearch />
          </div>
        </div>
        <div className='row'>
          <div className='col s12'>{renderMessages}</div>
        </div>
      </div>
    );
  }
}

export default Messages;
