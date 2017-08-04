<h4>Source of Basics</h4>
<hr>
The source is based on <a href="https://www.youtube.com/watch?v=JPT3bFIwJYA&index=1&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS"> these lessons </a>

<h5>For Two way binding, we did the following</h5>
Changes to index.js
1. We created a new parameter in index.js called initialLinkName
2. The value of this parameter came from the state that was defined in index.js

Changes to Home.js
1. We have defined homeLink and hardcoded to 'Changed Link' in the constructor
2. We now initialize that to props.initialLinkName that was passed in from index.js
3. We then declare a textField in the Home component and initialized it's value to 'this.state.homeLink', but this is just one-way-binding
4. We then add a onChange property of the textfield and bind it to a new function called handleOnChangeEvent that accepts an event
5. We define a handleOnChangeEvent event outside the render() function that accepts the event and invoke this.setState().
6. In the setState function, we pass the change to homeLink (as it is defined in the state object) and provide the new value for it.
7. The new value of home link comes from event's target value and hence <pre>this.setState({
    homeLink = event.target.value
});</pre>
8. This only updated the state in the child component. Now we need to pass the changes to the parent as the Homelink is defined in the parent (index.js)
9. To do that, we already have a function called <pre>onChangeLinkText(linkName) {}</pre>' defined the in parent that needs to be invoked
10. That function is passed into the Home.js via the props attribute on the Home component called 'changeLinkName'
11. We therefore create a function in the child (Home.js) onChangeLinkText as follows:
<pre>
function onChangeLinkText() {
    this.props.changeLinkName(this.state.homeLink);
}
</pre>
12. Having done that, we will link the newly created function 'onChangeLinkText' to the button adjacent to the text field
<pre>
&lt;button onClick={this.onChangeLinkText.bind(this)}&gt;Change Home Link&lt;/button&gt;
</pre>
