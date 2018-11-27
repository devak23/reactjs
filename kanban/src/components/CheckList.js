import React, { Component } from "react";

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map(t => (
      <li className="checklist__task" key={t.id}>
        <input type="checkbox" name="" id="" defaultChecked={t.done} /> {t.name}
        <a href="#" className="checklist__task--remove fa fa-remove" />
      </li>
    ));
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Key in a task and hit enter"
        />
      </div>
    );
  }
}

export default CheckList;
