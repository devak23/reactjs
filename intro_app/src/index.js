let React = require('react');
let ReactDOM = require('react-dom');

let myComponent = <h1>Hello from MyComponent</h1>;
console.log(myComponent);

let Greeting = function(props) {
  let style = {
    color: props.color
  };
  return <h1 style={style}>{props.message}</h1>;
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
// ReactDOM.render(<Greeting />, document.getElementById('root'));

// The parameter to the Greeting component gets wrapped into an object called props which gets passed to our function above.
ReactDOM.render(<Greeting message='Hello!' />, document.getElementById('root1'));
// We can have multiple DIV's in our index.html and can render separate messages to all of them.
ReactDOM.render(<Greeting message='Namaste!' color='orange' />, document.getElementById('root2'));
ReactDOM.render(<Greeting message='Konnichiva!' color='pink' />, document.getElementById('root3'));
ReactDOM.render(<Greeting message='Bounjour!' color='purple' />, document.getElementById('root4'));

// If there are multiple elements to be rendered in a single html div, we need to wrap it under a single div or use
// React.Fragment
ReactDOM.render(
  <React.Fragment>
    <Greeting message='Hallo' color='brown' />
    <Greeting message='Ciao' color='green' />
    <Greeting message='Привет' color='red' />
  </React.Fragment>,
  document.getElementById('root5')
);
