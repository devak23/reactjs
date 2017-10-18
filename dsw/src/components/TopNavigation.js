import React from "react";
import { Menu, Dropdown, Icon, Image } from "semantic-ui-react";
import { Link } from "react-dom";
import logo from "../images/logo.png";

const TopNavigation = () => (
  <Menu secondary pointing fluid>
    <Menu.Item as={Link} to="/dashboard">
      <Image src={logo} />
    </Menu.Item>
    <Menu.Item>
      <h4>Data Science Workbench</h4>
    </Menu.Item>

    <Menu.Menu position="right">
      <Dropdown
        trigger={<Icon style={{ margin: "20px 0" }} name="user" size="big" />}
      >
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => console.log("logout")}>
            Logout
          </Dropdown.Item>
          <Dropdown.Item onClick={() => console.log("Preferences")}>
            Preferences
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default TopNavigation;
