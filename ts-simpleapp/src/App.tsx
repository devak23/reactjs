import React from "react";
import logo from "./logo.svg";
import Confirm from "./Confirm";
import "./App.css";

interface AppState {
  confirmMessage: string;
  confirmOpen: boolean;
  confirmVisible: boolean;
  countDown: number;
}

export default class App extends React.Component<{}, AppState> {
  private timer: number = 0;
  state = {
    confirmMessage: "Please click the confirm button",
    confirmVisible: true,
    confirmOpen: false,
    countDown: 10
  };

  public componentDidMount() {
    this.timer = window.setInterval(() => this.handleTimerClick(), 1000);
  }

  private handleTimerClick = () => {
    this.setState(
      {
        confirmMessage: `Please click the confirm button. You have ${this.state.countDown} seconds to go.`,
        countDown: this.state.countDown - 1
      },
      () => {
        if (this.state.countDown < 0) {
          clearInterval(this.timer);
          this.setState({ confirmMessage: "Too late!", confirmVisible: false });
        }
      }
    );
  };

  private handleOkClick = () => {
    console.log("Ok was clicked");
    this.setState({ confirmOpen: false, confirmMessage: "Alright!! Rock on! :) :)" });
    clearInterval(this.timer);
  };

  private handleCancelClick = () => {
    console.log("Cancel was clicked");
    this.setState({ confirmOpen: false, confirmMessage: "Okay, but I'm sure you will come back :)" });
    clearInterval(this.timer);
  };

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
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
          title="Message"
          content="Would you like to learn React with Typescript :). I think it's a lot more fun than traditional javascript. What do you say?"
          okCaption="Okay! I'm in."
          onOkClick={this.handleOkClick}
          onCancelClick={this.handleCancelClick}
          open={this.state.confirmOpen}
        />
      </div>
    );
  }
}
