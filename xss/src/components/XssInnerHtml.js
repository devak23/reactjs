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
          secure enough for us to relax. The issue is with blog post 3 content. The code &lt;img
          onmouseover="alert('This site is not secure');" src="attack.jpg" /&gt; is not directly using a &lt;script&gt;
          tag to inject a malicious code, but is using an img tag with an event ( onmouseover ). So, if we are happy
          about React's protection, we can see that this XSS attack will be executed if we move the mouse over the
          image.
        </div>
      </div>
    );
  }
}

export default Xss;
