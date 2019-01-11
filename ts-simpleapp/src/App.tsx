import React from "react";
import logo from "./logo.svg";
import Confirm from "./Confirm";
import "./App.css";

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React and TypeScript!
          </a>
        </header>
        <Confirm title="First TSX component" content="Trying to learn React with typescript :)" okCaption="Alright!" />
      </div>
    );
  }
}
