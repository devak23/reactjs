import React from "react";
import logo from "./logo.svg";
import Confirm from "./Confirm";
import "./App.css";

interface IState {
  confirmOpen: boolean;
}

export default class App extends React.Component<{}, IState> {
  state = {
    confirmOpen: false
  };
  private handleOkClick = () => {
    console.log("Ok was clicked");
  };

  private handleCancelClick = () => {
    console.log("Cancel was clicked");
  };

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
        <Confirm
          title="TSX component"
          content="Try learning React with typescript :)"
          okCaption="Okay! I'm in."
          onOkClick={this.handleOkClick}
          onCancelClick={this.handleCancelClick}
          open={true}
        />
      </div>
    );
  }
}
