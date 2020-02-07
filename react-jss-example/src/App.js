import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Sports from "./components/Sports";
import Music from "./components/Music";
import Food from "./components/Food";

const App = ({isValidUser,...props }) => {
	useEffect(() => {
		console.log("UseEffect is invoked.")
	},[]);

	console.log("isValidUser = ", isValidUser);
	console.log("props = ", {...props});

	return ( isValidUser ? 
	<div>
		<Navbar {...props} />
		<Switch>
			<Route exact path="/home" component={Home}  {...props}/>
			<Route
				exact
				path="/sports"
				component={Sports}
				{...props}
			/>
			<Route exact path="/music" component={Music} {...props} />
			<Route exact path="/food" component={Food} {...props} />
		</Switch>
	</div> : null)
}

export default App;
