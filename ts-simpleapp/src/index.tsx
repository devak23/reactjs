import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// const App: React.SFC = () => {
//   return <h1>My React and Typescript!</h1>;
// };

ReactDOM.render(
  <div className='container'>
    <div className='mtop2'>
      <App />
    </div>
  </div>,
  document.getElementById('root')
);
