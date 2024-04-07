import React from "react";
import {getLayouts} from "../Layouts";
import {Responsive, WidthProvider} from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

class DesignArena extends React.Component {
  render() {
    var layouts = getLayouts();
    return (
      <ResponsiveGridLayout
        className="layout"
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        <div style={{width: 500, height: 500, border: "1px solid red"}} key="a">Div A</div>
        <div style={{width: 500, height: 500, border: "1px solid green"}} key="b">Div B</div>
        <div style={{width: 500, height: 500, border: "1px solid blue"}} key="c">Div C</div>

      </ResponsiveGridLayout>
    );
  }
}

export default DesignArena;