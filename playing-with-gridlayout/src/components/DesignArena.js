import React from "react";
import GridLayout from "react-grid-layout";
import "./DesignArena.css"
import {getCards, getLayout} from "../data/Elements";

class DesignArena extends React.Component {
  render() {
    return (
      <div className="layout">
        <GridLayout
            layout={getLayout()}
            cols={12}
            rowHeight={30}
            width={1200}
            verticalCompact={false}
        >

          { getCards() }

        </GridLayout>
      </div>
    )
  }
}

export default DesignArena;
