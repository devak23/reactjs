import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      this.setState({ posts: response.data.slice(0, 10) });
    });
  }
  render() {
    const { posts } = this.state;
    const layout = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <span className='card-title'>{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className='center'>No posts available</div>
    );
    return (
      <div className='container'>
        <h4 className='center'>Home</h4>
        {layout}
      </div>
    );
  }
}

export default Home;
