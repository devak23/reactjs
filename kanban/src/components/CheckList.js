import React, { Component } from "react";

class CheckList extends Component {
  checkInputKeyPress = event => {
    if (event.key === "Enter") {
      this.props.taskCallbacks.addTask(this.props.cardId, event.target.value);
      event.target.value = "";
    }
  };

  render() {
    const { deleteTask, toggleTask } = this.props.taskCallbacks;
    let tasks = this.props.tasks.map((t, index) => (
      <li className="checklist__task" key={t.id}>
        <input
          type="checkbox"
          name=""
          id=""
          defaultChecked={t.done}
          onClick={toggleTask(this.props.cardId, t.id, index)}
        />{" "}
        {t.name}{" "}
        <a
          href="#"
          className="checklist__task--remove fa fa-remove"
          onClick={deleteTask(this.props.cardId, t.id, index)}
        />
      </li>
    ));
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input
          type="text"
          className="checklist--add-task"
          placeholder="Key in a task and hit enter"
          onKeyPress={this.checkInputKeyPress}
        />
      </div>
    );
  }
}

export default CheckList;
