import DesignArena from "./components/DesignArena";
import {useState} from "react";
import './App.css';
import "react-grid-layout/css/styles.css";
import {DesignContext} from "./context/DesignContext";
import ConfigurationPanel from "./components/ConfigurationPanel";


const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [savedLayout, setSavedLayout] = useState([]);

  const handleItemSelected = (item) => {
    if (item.checked) {
      setSelectedItems([...selectedItems, item])
    } else {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    }
  }


  return (
    <div className="container">
      <DesignContext.Provider value={{savedLayout, setSavedLayout}}>
        <ConfigurationPanel onItemSelected={handleItemSelected}/>
        {/*<ConfigurationPanelWithItems onItemSelected={handleItemSelected}/>*/}
        <DesignArena selectedItems={selectedItems}/>
      </DesignContext.Provider>
    </div>
  );
}

export default App;
