import React, { Component } from 'react';

// Let's suppose this response is coming from a service and have
// some XSS attacks in the content...
const response = [
  {
    id: 1,
    title: 'My blog post 1...',
    content: '<p>This is <strong>HTML</strong> code</p>'
  },
  {
    id: 2,
    title: 'My blog post 2...',
    content: `<p>Alert: <script>alert(1);</script></p>`
  },
  {
    id: 3,
    title: 'My blog post 3...',
    content: `
        <p>
        <img onmouseover="alert('This site is not secure');"
        src="attack.jpg" />
        </p>`
  }
];

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
        <h2 className='title'>Vanilla implementation (Unsecure)</h2>
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
