import React from 'react';
import Supplier from './components/Supplier';
import Server from './components/api/Server';

const App = () => {

  const submitDataToServer = (data) => {
    alert(JSON.stringify(data));
    //make a server call
  }

  return (
    <Supplier submit={submitDataToServer} />
  );
}

export default App;
