import React, { Component } from 'react';
import Props from "prop-types";

// this is a stateful component. Hence needs to extend the component.
// else a stateless component (like MessagePane) would suffice.
class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: ''
    };
  }


  onSubmit() {
    const {name, message} = this.state;
    console.log(name, message);
    this.props.onSend(name, message);
    this.setState({name: '', message: ''});

  }

  updateName(event) {
    this.setState({
      name: event.target.value.trim()
    });
  }

  updateMessage(event) {
    this.setState({
      message: event.target.value.trim()
    });
  }

  render() {
    return (
      <div className="MessagePane-Form">
        <div className="MessagePane-Form-container">
          <p>
            <input
              // ref={(name) => {this.name_input = name}}
              className="name"
              type="text"
              placeholder="Your name"
              value={this.state.name}
              onChange={this.updateName.bind(this)}
            />
          </p>
          <p>
            <textarea
              // ref={(message) => {this.message_input = message}}
              className="message"
              placeholder="Your message"
              value={this.state.message}
              onChange={this.updateMessage.bind(this)}
            />
          </p>
          <p>
            <button className="send" onClick={this.onSubmit.bind(this)}>Send</button>
          </p>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onSend: Props.func.isRequired
};

Form.defaultProps = {
  onSend: () => {}
};

export default Form;