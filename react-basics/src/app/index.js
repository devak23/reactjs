import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        console.log('invoking the render method');
        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-offset-1">
                      <Header></Header>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-offset-1">
                      <Home></Home>
                  </div>
              </div>
          </div>
        );
    }
}

render(<App/>, document.getElementById("app"));