import * as React from "react";

interface IState {
  currentValue: number;
}

class Counter extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentValue: 0
    };
  }

  render() {
    return ()
  }
}
