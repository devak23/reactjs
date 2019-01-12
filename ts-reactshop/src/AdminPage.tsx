import React, { SFC } from 'react';

const AdminPage: SFC = () => {
  return (
    <div className='page-container'>
      <h1>Admin Panel</h1>
      <p>You should be here only if you're logged in</p>
    </div>
  );
};

export default AdminPage;
