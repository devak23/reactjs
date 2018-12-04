import React from "react";
import { Link } from "react-router-dom";

class Repos extends React.Component {
  state = {
    repositories: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/pro-react/repos")
      .then(response => response.json())
      .then(repositories => {
        this.setState({ repositories });
      });
  }

  render() {
    let repos = this.state.repositories.map(repo => (
      <li key={repo.id}>
        <Link to={"/repos/details/" + repo.name}>{repo.name}</Link>
      </li>
    ));

    return (
      <div>
        <h1>Github Repos</h1>
        <ul>{repos}</ul>
        {this.props.children}
      </div>
    );
  }
}

export default Repos;
