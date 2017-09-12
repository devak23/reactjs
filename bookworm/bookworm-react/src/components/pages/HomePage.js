import React from 'react';
import { Link } from 'react-router-dom';

// Again this is a functional component as no state is required to be
// maintained
const HomePage = () => (
  <div>
    <h1>Home Page</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
