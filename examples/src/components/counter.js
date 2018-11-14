import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count: this.props.count
    };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    setValue = (e) => {
        this.setState({ count: parseInt(e.target.value) });
    }

    render() {
        let { count } = this.state;
        let labelCount = this.props.count;
        return (
            <div className="">
                <label htmlFor="initialCount">Initial Count: </label>
                <div className="ui input">
                    <input id="initialCount" name="initialCount" type="text" value={labelCount} onChange={this.setValue} />
                </div>
                <button className="ui button" onClick={this.increment}>Increment</button> <br />
                <label>Value now is: {count}</label>
            </div>
        )
    }
}

export default Counter;