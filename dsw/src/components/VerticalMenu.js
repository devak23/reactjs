import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";

class VerticalMenu extends Component {
  state = { activeItem: "home", refData: [] };

  componentDidMount = () =>
    this.setState({
      refData: [
        {
          id: 1,
          iconName: "home",
          tooltip: "Home"
        },
        {
          id: 2,
          iconName: "code",
          tooltip: "Upload an algorithm"
        },
        {
          id: 3,
          iconName: "database",
          tooltip: "Create a dataset"
        },
        {
          id: 4,
          iconName: "bar chart",
          tooltip: "Visualize the model"
        },
        {
          id: 5,
          iconName: "computer",
          tooltip: "Create a model"
        },
        {
          id: 6,
          iconName: "zip",
          tooltip: "Play in Sandbox"
        }
      ]
    });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem, refData } = this.state;

    return (
      <Menu icon vertical>
        {refData.map(data => (
          <Menu.Item
            key={data.id}
            name={data.iconName}
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          >
            <div
              className="ui icon"
              data-tooltip={data.tooltip}
              data-position="right center"
            >
              <Icon name={data.iconName} />
            </div>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default VerticalMenu;
