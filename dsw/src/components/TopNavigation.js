import React from "react";
// import { Menu, Dropdown, Icon, Image } from "semantic-ui-react";
import { Link } from "react-dom";
import logo from "../images/logo.png";

const TopNavigation = () => (
  <div
    className="ui  inverted menu fluid"
    style={{ background: "#06273f", borderBottom: "4px solid #CC000A" }}
  >
    <div className="ui container fluid">
      <a href="#" className="header" style={{ margin: "0px 20px" }}>
        <img className="logo" src={logo} size="huge" />
      </a>
      <span className="item">Data Science Workbench</span>
      <div className="ui simple dropdown item right">
        John Snow
        <i className="icon power" style={{ margin: "0px 0px 0px 10px" }} />
      </div>
    </div>
  </div>
);

export default TopNavigation;
