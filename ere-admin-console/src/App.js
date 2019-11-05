import React,{Component, Fragment} from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Reports from './components/Reports';
import Administration from './components/Administration';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Home />
        <Reports />
        <Administration />
      </Fragment>      
    )
  }
}

export default App;