import React from "react";
import logo from "./logo.svg";
import Confirm from "./Confirm";
import "./App.css";

interface AppState {
  confirmMessage: string;
  confirmOpen: boolean;
}

export default class App extends React.Component<{}, AppState> {
  state = {
    confirmMessage: "Please click the confirm button",
    confirmOpen: true
  };
  private handleOkClick = () => {
    console.log("Ok was clicked");
    this.setState({ confirmOpen: false });
  };

  private handleCancelClick = () => {
    console.log("Cancel was clicked");
    this.setState({ confirmOpen: false, confirmMessage: "Okay, but I'm sure you will come back :)" });
  };

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true, confirmMessage: "Alright!! Rock on! :) :)" });
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
        <p>{this.state.confirmMessage}</p>
        <button onClick={this.handleConfirmClick}>Confirm</button>
        <Confirm
          title="TSX component"
          content="Try learning React with typescript :)"
          okCaption="Okay! I'm in."
          onOkClick={this.handleOkClick}
          onCancelClick={this.handleCancelClick}
          open={this.state.confirmOpen}
        />
      </div>
    );
  }
}
