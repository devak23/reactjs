import React from "react";

class Elements extends React.Component {
  render() {
    return (
      <>
        <div style={{width: 500, height: 500, border: "1px solid red"}} key="a">Div A</div>
        <div style={{width: 500, height: 500, border: "1px solid green"}} key="b">Div B</div>
        <div style={{width: 500, height: 500, border: "1px solid blue"}} key="c">Div C</div>
      </>
    );
  }
}

export default Elements;