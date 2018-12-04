import React, { Component } from "react";

class RepoDetails extends Component {
  state = { repository: "" };

  fetchRepoData(repoName) {
    console.log("repoName = ", repoName);
    fetch("https://api.github.com/repos/pro-react/" + repoName)
      .then(response => response.json())
      .then(repository => this.setState({ repository }));
  }

  componentDidMount() {
    this.fetchRepoData(this.props.match.params.repoName);
  }

  componentWillReceiveProps(nextProps) {
    this.fetchRepoData(nextProps.params.match.repoName);
  }

  render() {
    let stars = [];
    for (var i = 0; i <= this.state.repository.stargazers_count; i++) {
      stars.push("*");
    }
    return (
      <div>
        <h2>{this.state.repository.name}</h2>
        <p>{this.state.repository.description} </p>
        <span>{stars}</span>
      </div>
    );
  }
}

export default RepoDetails;
