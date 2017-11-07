import React from "react";
import { Route } from "react-router-dom";
import LoginPage from "./components/pages/LoginPage";
import SignupPage from "./components/pages/SignupPage";
import DashboardPage from "./components/pages/DashboardPage";

const App = () => (
  <div>
    <Route path="/" exact component={DashboardPage} />
    <Route path="/login" exact component={LoginPage} />
    <Route path="/signup" exact component={SignupPage} />
  </div>
);

export default App;
