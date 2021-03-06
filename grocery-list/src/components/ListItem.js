import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.quantity} x {this.props.children}
      </li>
    );
  }
}

export default ListItem;
