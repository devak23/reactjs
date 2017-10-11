import fetch from 'isomorphic-fetch';

export default class Home extends React.Component {
  state = {
    username: null,
    user: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    fetch(`https://api.github.com/users/${username}`)
      .then(res => this.setState({ user: res.data.user }))
      .catch(err => console.error(err));
  };

  render() {
    const { user } = this.state;

    return (
      <div>
        {user && (
          <div>
            <img src={user.avatar_url} alt={user.login} width={50} />
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>
              {user.company} Repositories: <span>{user.public_repos}</span>
            </p>
            <p>{user.email}</p>
          </div>
        )}
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Please type a github username"
          onChange={e => this.setState({ username: e.target.value })}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Get data
        </button>
      </div>
    );
  }
}
