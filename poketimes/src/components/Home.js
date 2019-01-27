import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pokeball from "../pokeball.png";

class Home extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
      this.setState({ posts: response.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const layout = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="Pokeball" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title red-text">{post.title}</span>
              </Link>

              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts available</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Blog posts</h4>
        {layout}
      </div>
    );
  }
}

export default Home;
