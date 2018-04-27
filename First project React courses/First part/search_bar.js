import React, { Component } from 'react';
//{ Component } mean pull of the property React.Component
//and assign it to the variable Component

//This is a functional
 component
const SearchBar = () => {
    return <input />;
};

//There is also class component
//Which is used when we want to keep
//track of internal element
//This is want we want here
//So we want to refactor SearchBar

class SearchBar extends Component {
    constructor(props) {
        super(props);

        //We initialize state by creating a new
        //object and assiging it to this.state
        //We want to record on the state : term (for search term)
        //
        this.state = { term: '' };
    }
    //We always need to define a render method
    //We need an event handler to check
    //when the text of the input change
    //To do that we add a property at input
    render () {
        return (
            <div>   
                <input 
                    value={this.state.term} //Turn into a controlled component
                    onChange={ event => this.setState({term : event.target.value})} />
            </ div>   
        );
    }

}



//We need to export our component to index.js 
//to render it

export default SearchBar;

//A good way to decide between functional and
//class component is to start with functional
// and when you need to add functionality 
//refactor to class
