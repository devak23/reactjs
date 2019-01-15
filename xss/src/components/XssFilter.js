import React, { Component } from 'react';
import removeXssAttacks from './util';
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
        <p dangerouslySetInnerHTML={removeXssAttacks(post.content)} />
      </div>
    ));

    return (
      <div className='xss'>
        <h2 className='title'>Removing Xss attacks (Partially Secure)</h2>
        {posts}
        <div className='comment'>
          If we have an XSS attack ( &lt;script&gt; tag inside the content) in our response and then we use
          JSON.stringify to convert the object to a string, the HTML tags are <b>NOT</b> encoded. That means that if we
          inject the string into our HTML (like Redux does with the initial state), we will have a potential security
          issue. The output of JSON.stringify(response) exposes all the HTML without any encoding characters, and that
          is a problem
        </div>
      </div>
    );
  }
}

export default Xss;
