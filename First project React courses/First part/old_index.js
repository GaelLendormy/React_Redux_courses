//React is divided into 2 library
//React that deal with component
//ReactDOM that deal with the DOM and
//render our component

//Defined React and ReactDOM
//go find a library called 'react' and
//assigned to a variable called React
import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This compoment should produce some HTML
//App is a component class not a component instance
const App = () => {
   return <div>Hi!</div>;// This is JSX
}

// Take this component's generated HTML and
//put it on the page (in the DOM)
//We pass an instance of the App component class
//first argument is the component, the second the target DOM node
React.render(<App />, document.querySelector('.container'));