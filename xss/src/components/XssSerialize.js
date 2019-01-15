import React, { Component } from 'react';
import serialize from 'serialize-javascript';
import removeXssAttacks from './util';
import response from './data';

// Let's suppose this is our initialState of Redux
// which is injected to the DOM...
const initialState = serialize(response);
console.log('XssSerialize: encoded json: ', initialState);

class Xss extends Component {
  render() {
    const data = JSON.parse(initialState);
    console.log('XssSerialize: decoded json: ', data);
    const posts = data.map((post, key) => (
      <div key={key}>
        <h2>{post.title}</h2>
        <p dangerouslySetInnerHTML={removeXssAttacks(post.content)} />
      </div>
    ));

    return (
      <div className='xss'>
        <h2 className='title'>Serialize javascript implementation (Secure)</h2>
        {posts}
        <div className='comment'>
          With serialize-javascript package, we have our HTML entities (encoded) instead of directly having HTML tags.
          Check the console logs. And the good news is that we can use JSON.parse to convert this string again into our
          original object.
        </div>
      </div>
    );
  }
}

export default Xss;
