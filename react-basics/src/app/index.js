import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var sandeep = {
            name: "Sandeep K",
            age: 40,
            department: 'Software',
            team: ["Abhay", "Datta", "Vidyadhar", "Pratima", "Ranjit", "Madhuri", "Komal", "Akshayee"]
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
                      <Header homeLink="Home"/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-xs-10 col-offset-1">
                      <Home user={sandeep}>
                          Birth date: Dec 24, 1975
                      </Home>
                      <Home user={vinod}>
                          Birth date: Jun 13, 1978
                      </Home>
                  </div>
              </div>
          </div>
        )
    }
}

render(<App/>, document.getElementById("app"));