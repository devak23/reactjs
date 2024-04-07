
import React from "react";
import GridLayout from "react-grid-layout";
import {getLayouts} from "./Layouts";
import Elements from "./components/Elements";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = getLayouts();
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >

        <div style={{width: 500, height: 500, border: "1px solid red"}} key="a">Div A</div>
        <div style={{width: 500, height: 500, border: "1px solid green"}} key="b">Div B</div>
        <div style={{width: 500, height: 500, border: "1px solid blue"}} key="c">Div C</div>

      </GridLayout>
    );
  }
}

export default MyFirstGrid;
