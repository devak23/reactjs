import React from 'react';
import logo from './logo.svg';
import Confirm from './Confirm';
import './App.css';

/**
 * Application has a state which will keep a track of following variables
 */
interface AppState {
  confirmMessage: string;
  confirmOpen: boolean;
  confirmVisible: boolean;
  countDown: number;
}

class App extends React.Component<{}, AppState> {
  private timer: number = 0;
  private renderCount: number = 0;

  state = {
    confirmMessage: 'Please click the confirm button',
    confirmVisible: true,
    confirmOpen: false,
    countDown: 10
  };

  public getSnapshotBeforeUpdate(prevProps: {}, prevState: AppState) {
    this.renderCount++;
    console.log('getSnapshotBeforeUpdate', prevProps, prevState, {
      renderCount: this.renderCount
    });
    return this.renderCount;
  }

  public componentDidUpdate(prevProps: {}, prevState: AppState, snapshot: number) {
    console.log('componentDidUpdate', prevProps, prevState, snapshot, {
      renderCount: this.renderCount
    });
  }

  public static getDerivedStateFromProps(props: {}, state: AppState) {
    console.log('getDerivedStateFromProps', props, state);
    return null;
  }

  public shouldComponentUpdate(nextProps: {}, nextState: AppState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

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
          this.setState({ confirmMessage: 'Too late!', confirmVisible: false });
        }
      }
    );
  };

  private handleOkClick = () => {
    console.log('Ok was clicked');
    this.setState({
      confirmOpen: false,
      confirmMessage: 'Alright!! Rock on! :) :)'
    });
    clearInterval(this.timer);
  };

  private handleCancelClick = () => {
    console.log('Cancel was clicked');
    this.setState({
      confirmOpen: false,
      confirmMessage: "Okay, but I'm sure you will come back :)"
    });
    clearInterval(this.timer);
  };

  private handleConfirmClick = () => {
    this.setState({ confirmOpen: true });
    clearInterval(this.timer);
  };

  public render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          Learn React and TypeScript!
        </header>
        <p>{this.state.confirmMessage}</p>
        {this.state.confirmVisible && <button onClick={this.handleConfirmClick}>Confirm</button>}
        <Confirm
          title='Message'
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

export default App;
