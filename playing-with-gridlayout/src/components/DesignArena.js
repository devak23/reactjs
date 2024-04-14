import React, {useEffect, useState} from "react";
import GridLayout from "react-grid-layout";
import "./DesignArena.css"
import {getCards, getLayout} from "../data/Elements";
import {toast, Toaster} from "react-hot-toast";

const DesignArena = ({selectedItems}) => {
  const [layout, setLayout] = useState([])
  const [cards, setCards] = useState([])
  const [savedLayout, setSavedLayout] = useState([])

  const handleSaveLayout = () => {
    if (layout.length) {
      setSavedLayout(layout);
      notify('Layout saved successfully.', true);
    } else {
      toast.error("Nothing to save!")
    }
  }

  const notify = (message, success) => {
    if (success) {
      toast.success(message, {duration: 1000})
    } else {
      toast.error(message, {duration: 2000});
    }
  }

  const handleLoadLayout = () => {
    setLayout(savedLayout)
  }

  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    setSavedLayout(newLayout);
  }

  const handleResetLayout = () => {
    setLayout(getLayout(selectedItems));
  }

  useEffect(() => {
    if (layout.length) {
      setSavedLayout(layout);
    }
    setLayout(getLayout(selectedItems));
    setCards(getCards(selectedItems));
    setLayout(savedLayout)
  }, [selectedItems]);

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      <div className="grid">
        <GridLayout
          layout={layout}
          allowOverlap={true}
          cols={12}
          rowHeight={30}
          width={1200}
          compactType={null}
          margin={[15, 15]}
          containerPadding={[2, 2]}
          onLayoutChange={handleLayoutChange}
        >
          {cards}

        </GridLayout>
      </div>
      <div style={{display: "flex", marginTop: 20}}>
        <button style={{margin: "auto", height: 30}} onClick={handleSaveLayout}>Save Layout</button>
        <button style={{margin: "auto", height: 30}} onClick={handleLoadLayout}>Load Layout</button>
        <button style={{margin: "auto", height: 30}} onClick={handleResetLayout}>Reset Layout</button>
      </div>
      <Toaster/>
    </div>
  )
}

export default DesignArena;
