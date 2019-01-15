import React, { Component } from 'react';
import response from './data';

// Let's suppose this is our initialState of Redux
// which is injected to the DOM...
const initialState = JSON.stringify(response);

class Xss extends Component {
  render() {
    const data = JSON.parse(initialState);
    const posts = data.map((post, key) => (
      <div key={key}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>
    ));

    return (
      <div className='xss'>
        <h2 className='title'>Vanilla implementation (Undesired)</h2>
        {posts}
        <div className='comment'>
          As you can see, by default, React prevents us from injecting HTML code directly into our components. It is
          rendering the HTML as a string. This is good, but sometimes we need to insert HTML code in our components.
        </div>
      </div>
    );
  }
}

export default Xss;
