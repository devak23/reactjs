import React, { Component } from "react";
import { Icon, Menu } from "semantic-ui-react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class VerticalMenu extends Component {
  state = { activeItem: "home", refData: [] };

  componentDidMount = () =>
    this.setState({
      refData: [
        {
          id: 1,
          iconName: "home",
          path: "/",
          tooltip: "Home"
        },
        {
          id: 2,
          iconName: "code",
          path: "/algorithms",
          tooltip: "Upload an algorithm"
        },
        {
          id: 3,
          iconName: "database",
          path: "/datasets",
          tooltip: "Create a dataset"
        },
        {
          id: 4,
          iconName: "bar chart",
          path: "/visualize",
          tooltip: "Visualize the model"
        },
        {
          id: 5,
          iconName: "computer",
          path: "/models",
          tooltip: "Create a model"
        },
        {
          id: 6,
          iconName: "zip",
          path: "/sandbox",
          tooltip: "Play in Sandbox"
        }
      ]
    });

  handleItemClick = data => {
    this.setState({ activeItem: data.iconName });
    this.props.history.push(data.path);
  };

  render() {
    const { activeItem, refData } = this.state;

    return (
      <Menu icon vertical>
        {refData.map(data => (
          <Menu.Item
            key={data.id}
            name={data.iconName}
            active={activeItem === data.iconName}
            data_path={data.path}
            onClick={() => this.handleItemClick(data)}
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

VerticalMenu.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(VerticalMenu);
