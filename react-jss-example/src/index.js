import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';

import App from "./App";

render(
	<BrowserRouter>
		<Route render={(routeProps) => <App isValidUser={true} {...routeProps}/>} />
	</BrowserRouter>,
	document.querySelector("#root")
);
