import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import profiles from "./data/profiles";

function App() {
  const [data, setData] = useState([]);

  const handleClick = () => {
    setData(profiles);
  };

  const handleProfileUpdate = (profile) => {
    //setData([...profiles.filter(p => p.id !== profile.id), profile]);
    const index = data.map(p => p.id).indexOf(profile.id);
    const post = data.splice(index+1);
    const pre = data.splice(0, data.length-1);
    setData([...pre, profile, ...post]);
  }

  return (
    <div className="appContainer">
      {data && data.map((p) =>
        <Profile
          key={p.id}
          profile={p}
          onProfileUpdate={handleProfileUpdate}/>)
      }

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
