import './App.css';
import ConfigurationPanel from "./components/ConfigurationPanel";
import DesignArea from "./components/DesignArea";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";


const App = () => {
  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <ConfigurationPanel/>
        <DesignArea/>
      </DndProvider>
    </div>
  );
}

export default App;
