import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        console.debug('invoking the render method');
        return (
          <div className="container">
              <h1 className="jumbotron">Todo Lists</h1>
          </div>
        );
    }
}

render(<App/>, document.getElementById("app"));