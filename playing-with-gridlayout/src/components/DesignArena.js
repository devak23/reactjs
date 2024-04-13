import React, {useState} from "react";
import GridLayout from "react-grid-layout";
import "./DesignArena.css"
import {getCards, getInitialLayout, loadLayout, saveLayout} from "../data/Elements";

const DesignArena = () => {
  const [layout, setLayout] = useState(getInitialLayout())

  const handleSaveLayout = () => {
    saveLayout(layout);
  }

  const handleLoadLayout = () => {
    setLayout(loadLayout())
  }

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
  }

  const handleResetLayout = () => {
    setLayout(getInitialLayout());
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="grid">
        <GridLayout
          layout={layout}
          cols={12}
          rowHeight={30}
          width={1200}
          compactType={null}
          margin={[5, 5]}
          containerPadding={[1, 1]}
          onLayoutChange={handleLayoutChange}
        >
          {getCards()}

        </GridLayout>
      </div>
      <div style={{display:"flex"}}>
        <button style={{margin: "auto", height: 30}} onClick={handleSaveLayout}>Save Layout</button>
        <button style={{margin: "auto", height: 30}} onClick={handleLoadLayout}>Load Layout</button>
        <button style={{margin: "auto", height: 30}} onClick={handleResetLayout}>Reset Layout</button>
      </div>
    </div>
  )
}

export default DesignArena;
