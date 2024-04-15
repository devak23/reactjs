import React, {useContext, useEffect, useState} from "react";
import GridLayout from "react-grid-layout";
import "./DesignArena.css"
import {getCards, getInitialLayout} from "../data/Elements";
import {toast, Toaster} from "react-hot-toast";
import {DesignContext} from "../context/DesignContext";

const DesignArena = ({selectedItems}) => {
  const [layout, setLayout] = useState([])
  const [cards, setCards] = useState([])
  const {savedLayout, setSavedLayout} = useContext(DesignContext);

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
    setLayout(getInitialLayout(selectedItems));
  }

  useEffect(() => {
    setLayout(getInitialLayout(selectedItems));
    setCards(getCards(selectedItems));
    setLayout(savedLayout)
  }, [selectedItems]);


  return (
    <div className="designArenaContainer">
      <div className="buttonBar">
        <button style={{margin: 5, height: 30}} onClick={handleSaveLayout}>Save Layout</button>
        <button style={{margin: 5, height: 30}} onClick={handleLoadLayout}>Load Layout</button>
        <button style={{margin: 5, height: 30}} onClick={handleResetLayout}>Reset Layout</button>
      </div>
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
      <Toaster/>
    </div>
  )
}

export default DesignArena;
