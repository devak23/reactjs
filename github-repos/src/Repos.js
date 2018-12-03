import React from "react";

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
      <li key={repo.id}>{repo.name}</li>
    ));

    return <div>{repos}</div>;
  }
}

export default Repos;
