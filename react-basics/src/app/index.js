import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLinkText: "Home"
        };
    }

    sayHello() {
        alert('Hello Parent Component');
        return 'Hello Parent Component';
    }

    onChangeLinkText(linkName) {
        this.setState({
           homeLinkText: linkName
        });
    }

    render() {
        var sandeep = {
            name: "Sandeep K",
            age: 42,
            department: 'Software',
            team: ["Abhay", "Datta", "Vidyadhar"], //, "Pratima", "Ranjit", "Madhuri", "Komal", "Akshayee"],
            linkName: 'Software Home'
        };

        var vinod = {
            name: "Vinod K",
            age: 38,
            department: 'Streaming',
            team: ["KD", "Dinesh", "Asif"],
            linkName: 'Streaming Home'
        };

        return (
          <div className="container">
              <div className="row">
                  <div className="col-xs-10 col-xs-offset-0">
                      <Header homeLink={this.state.homeLinkText}/>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <Home
                          user={sandeep}
                          greet={this.sayHello}
                          initialLinkName={this.state.homeLinkText}
                          changeLinkName={this.onChangeLinkText.bind(this)}>
                          Birth date: Dec 24, 1974
                      </Home>
                  </div>
                  <div className="col-md-6">
                      <Home
                          user={vinod}
                          greet={this.sayHello}
                          initialLinkName={this.state.homeLinkText}
                          changeLinkName={this.onChangeLinkText.bind(this)}>
                          Birth date: Jun 13, 1978
                      </Home>
                  </div>
              </div>
          </div>
        )
    }
}

render(<App/>, document.getElementById("app"));