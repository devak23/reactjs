import React, { Component } from "react";

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map(t => (
      <li className="checklist__task">
        <input type="checkbox" name="" id="" defaultChecked={t.done} /> {t.name}
        <a href="#" className="checklist__task--remove fa fa-remove" />
      </li>
    ));
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
      </div>
    );
  }
}

export default CheckList;
