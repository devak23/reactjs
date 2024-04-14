import './App.css';
import "react-grid-layout/css/styles.css";
import DesignArena from "./components/DesignArena";
import ConfigurationPanel from "./components/ConfigurationPanel";
import {useState} from "react";

function App() {
  const [selectedItems, setSelectedItems] = useState([])

  const handleItemSelected = (item) => {
    if (item.checked) {
      setSelectedItems([...selectedItems, item])
    } else {
      setSelectedItems(selectedItems.filter(i => i.id !== item.id));
    }
  }


  return (
    <div className="container">
      <ConfigurationPanel onItemSelected={handleItemSelected}/>
      <DesignArena selectedItems={selectedItems}/>
    </div>
  );
}

export default App;
