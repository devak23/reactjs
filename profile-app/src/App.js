import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import profiles from "./data/profiles";

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData(profiles);
  };

  return (
    <div className="appContainer">
      {data && data.map((p) => <Profile key={p.id} profile={p} />)}

      {data && !data.length && (
        <>
          <div className="nodata fade">
            <p>Nothing to show!</p>
            <button onClick={handleClick}>Load data</button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
