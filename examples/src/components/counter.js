import React, { Component } from 'react';


class Counter extends Component {
    state = {
        currentCount: this.props.count,
        initialCount: this.props.count
    };

    increment = () => {
        this.setState({ currentCount: this.state.currentCount + 1 });
    }

    setValue = (e) => {
        this.setState({ currentCount: parseInt(e.target.value), initialCount: parseInt(e.target.value) });
    }

    render() {
        let { currentCount, initialCount } = this.state;
        return (
            <div className="">
                <label htmlFor="initialCount">Initial Count: </label>
                <div className="ui input">
                    <input id="initialCount" name="initialCount" type="text" value={initialCount} onChange={this.setValue} />
                </div>
                <div className="ui input">
                    <button className="ui button" onClick={this.increment}>Increment</button>
                </div>
                <label>Current Count: {currentCount}</label>
            </div>
        )
    }
}

export default Counter;