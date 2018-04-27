//React is divided into 2 library
//React that deal with component
//ReactDOM that deal with the DOM and
//render our component

//Defined React and ReactDOM 
//go find a library called 'react' and 
//assigned to a variable called React
import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'youtube key';

//We need to import our SearchBar component
//When we import our file we need 
//We don't need to do it for the library we import
//. = mean curent folder

import SearchBar from './components/search_bar';

//Create a new component. This component should
//produce some HTML

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}


// Take this component's generated HTML and 
//put it on the page (in the DOM)
//We pass an instance of the App component class
//first argument is the component, the second the target DOM node
React.render(<App />, document.querySelector('.container'));



