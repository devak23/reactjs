let React = require('react');
let ReactDOM = require('react-dom');

let myComponent = <h1>Hello from MyComponent</h1>;
console.log(myComponent);

let Greeting = function() {
  return <h1>Hello from My Component</h1>;
};

/* this will be rendered on the screen even when myComponent doesn't start with upper case 'M'. this is
   because myComponent is a react component which returns a JSX element. 
*/
// ReactDOM.render(myComponent, document.getElementById('root'));

/* this wont be rendered on the screen because Greeting is not a React element. It is a functional
   component which has to be wrapped inside React.createElement call. Will it work if pass a <greeting /> to
   the render function below? No. This is because When the call to React.createElement is made, if the parameter is 
   in lower case, react will try to look up for a native dom element and wont find any and hence wont render anything.
   However, if you passin a react component like above (myComponent), React knows that its NOT a DOM element and hence
   will render the element on the screen. Therefore the above Greeting functional component has to be either wrapped in
   React.createElement(Greeting) or it has to be passed to render method using JSX like so 
 */
ReactDOM.render(<Greeting />, document.getElementById('root'));
