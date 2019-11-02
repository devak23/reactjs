import React from 'react';
import { render } from 'react-dom';
import './index.css'

function Hello() {
    return (
        <div>
            <h2>Hello World! from PureReact</h2>
            <p>
                So this text comes from a function called Hello
                <pre><code>function Hello() </code></pre>
            </p>
            <p>Initially, I coded the function with lower case hello</p>
            <pre><code>function hello() </code></pre>
            <p>
                So obviously the tag in the render() method has to be called
                &lt;hello&gt;. To my surprise when i started the server, react didn't
                render anything! The reason is -  react tries to render lower cased function
                as html element and uppper cased functions are treated by React as
                React Components.
            </p>
            <p>
                Since there is no html element called &lt;hello /&gt;, react didn't
                render anything.
                Changing the function name to Hello and changing the tag to &lt;Hello/&gt;
                fixed the problem and this text is now visible.
            </p>
            <p>
                This is a small thing Dave missed to mention, but then he expected me to
                code "exactly" the way he had mentioned in the book, and I didn't! so...we are good! :)
            </p>
            <p>Good learning!</p>
        </div>
    )
}

render(<Hello />, document.querySelector("#root"))