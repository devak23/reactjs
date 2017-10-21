import React from "react";
import { Image } from "semantic-ui-react";
import logo from "../images/logo.png";

const TopNavigation = () => (
  <div
    className="ui  inverted menu fluid"
    style={{ background: "#06273f", borderBottom: "4px solid #CC000A" }}
  >
    <div className="ui container fluid">
      <a href="/oneview" className="header" style={{ margin: "0px 20px" }}>
        <Image className="logo" src={logo} />
      </a>
      <span className="item">Data Science Workbench</span>
      <div
        className="ui simple dropdown item right"
        style={{ margin: "0 10px 0 0" }}
      >
        John Snow
        <i className="icon power" style={{ margin: "0 0 0 10px" }} />
      </div>
    </div>
  </div>
);

export default TopNavigation;
