import React from 'react';
import LoginLink from '../helpers/LoginLink';

const HomePage = () => {
  return (
    <div className="one column wide">
      <div className="ui container">
        <header className="ui large header">Home Page</header>
        <LoginLink/>
      </div>
    </div>
  );
}

export default HomePage;
