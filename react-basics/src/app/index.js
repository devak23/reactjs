import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var abhay = {
            name: "Abhay K",
            age: 38,
            department: 'Software',
            team: ["Datta", "Sandeep", "Vidyadhar", "Pratima", "Ranjit", "Madhuri"]
        };

        var vinod = {
            name: "Vinod K",
            age: 38,
            department: 'Streaming',
            team: ["KD", "Dinesh", "Asif"]
        };

        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-offset-1">
                      <Header/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-offset-1">
                      <Home user={abhay}/>
                      <Home user={vinod}/>
                  </div>
              </div>
          </div>
        )
    }
}

render(<App/>, document.getElementById("app"));