import React from "react";

class About extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.match.params.title}</h1>
      </div>
    );
  }
}

export default About;
