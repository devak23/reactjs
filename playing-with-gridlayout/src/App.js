import './App.css';
import DesignArena from "./components/DesignArena";
import "./react-grid-layout.css";
import "./react-resizable.css";
import ComponentPanel from "./components/ComponentPanel";

function App() {
  return (
    <div className="App">
      <ComponentPanel />
      <DesignArena />
    </div>
  );
}

export default App;
