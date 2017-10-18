import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class VerticalMenu extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon vertical>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <div class="ui icon" data-tooltip="Home" data-position="right center">
            <Icon name="home" />
          </div>
        </Menu.Item>

        <Menu.Item
          className="ui icon button"
          name="code"
          active={activeItem === "code"}
          onClick={this.handleItemClick}
        >
          <div
            class="ui icon"
            data-tooltip="Upload an algorithm"
            data-position="right center"
          >
            <Icon name="code" />
          </div>
        </Menu.Item>

        <Menu.Item
          name="database"
          active={activeItem === "database"}
          onClick={this.handleItemClick}
        >
          <div
            class="ui icon"
            data-tooltip="Create a dataset"
            data-position="right center"
          >
            <Icon name="database" />
          </div>
        </Menu.Item>

        <Menu.Item
          name="bar chart"
          active={activeItem === "bar chart"}
          onClick={this.handleItemClick}
        >
          <div
            className="ui icon"
            data-tooltip="Visualize the data"
            data-position="right center"
          >
            <Icon name="bar chart" />
          </div>
        </Menu.Item>

        <Menu.Item
          name="computer"
          active={activeItem === "computer"}
          onClick={this.handleItemClick}
        >
          <div
            className="ui icon"
            data-tooltip="Create a model"
            data-position="right center"
          >
            <Icon name="computer" />
          </div>
        </Menu.Item>

        <Menu.Item
          name="zip"
          active={activeItem === "zip"}
          onClick={this.handleItemClick}
        >
          <div
            className="ui icon"
            data-tooltip="Play in Sandbox"
            data-position="right center"
          >
            <Icon name="zip" />
          </div>
        </Menu.Item>
      </Menu>
    );
  }
}

export default VerticalMenu;
