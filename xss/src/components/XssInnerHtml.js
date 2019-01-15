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
        <p dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    ));

    return (
      <div className='xss'>
        <h2 className='title'>
          <code>dangerouslySetInnerHTML</code> implementation
        </h2>
        {posts}
        <div className='comment'>
          Even if we use dangerouslySetInnerHTML , React protects us from malicious scripts injections, but it is not
          secure enough for us to relax on the security aspect of our site. Now let's see the issue with My blog post 3
          content. The code &lt;img onmouseover="alert('This site is not secure');" src="attack.jpg" /&gt; is not
          directly using a &tl;script&gt; tag to inject a malicious code, but is using an img tag with an event (
          onmouseover ). So, if you were happy about React's protection, we can see that this XSS attack will be
          executed if we move the mouse over the image.
        </div>
      </div>
    );
  }
}

export default Xss;
