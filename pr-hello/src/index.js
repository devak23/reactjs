import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Hello() {
  return (
    <div className='container'>
      <div className='mtop2'>
        <h2>Hello World! from PureReact</h2>
        <hr className='simple' />
        <p>
          So this text comes from a function called Hello
          <pre>
            <code>function Hello() </code>
          </pre>
        </p>
        <p>Initially, I coded the function with lower case hello</p>
        <pre>
          <code>function hello() </code>
        </pre>
        <p>
          So obviously the tag in the render() method has to be called &lt;hello&gt;. To my surprise, react didn't
          render anything at the server start. The reason is - react tries to render lower cased functions as html
          element and uppper cased functions as React Components. A better answer can be found{' '}
          <a href='https://stackoverflow.com/questions/30373343/reactjs-component-names-must-begin-with-capital-letters'>
            here
          </a>
        </p>
        <p>
          Since there is no html element called &lt;hello /&gt;, react didn't render anything. Changing the function
          name to Hello and changing the tag to &lt;Hello/&gt; fixed the problem and this text is now visible.
        </p>
        <p>
          Small thing Dave missed to mention, but he expected me to code "exactly" the way he had mentioned in the book,
          and I didn't! so...we are good! &#128519;
        </p>
        <p>Good learning!</p>
        <hr className='simple' />
      </div>
    </div>
  );
}

render(<Hello />, document.querySelector('#root'));
