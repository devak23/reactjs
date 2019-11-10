import React, { Fragment } from 'react';
import ClassOneTimeButton from './components/ClassOneTimeButton';
import FuncOneTimeButton from './components/FuncOneTimeButton'


const log = (message) => console.log(message);

const App = () => (
  <Fragment>
    <p>
      <ClassOneTimeButton label='Class Button' onClick={() => log('Class button is clicked')} />
    </p>
    <p>
      <FuncOneTimeButton label='Function Button' onClick={() => log('Function Button is clicked')} />
    </p>
  </Fragment>
)

export default App;