import React, { Component } from 'react';
//{ Component } mean pull of the property React.Component
//and assign it to the variable Component


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }

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

export default SearchBar;
