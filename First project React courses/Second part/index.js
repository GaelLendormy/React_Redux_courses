
import React, { component } from 'react';
import ReactDOM from 'react-dom';
//import the search package we download
import YTSearch from 'youtube-api-youtube';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'youtube key';



//We want to refactor App to a class based component
//We want App can keep track of a list of video
//We used state for that
class App extends Component {
    constructor(props) {
        super(props)

        this.state = { videos: [] };

        //We want a list of video present by default
        YTSearch({key : API_KEY, term : 'surfboards'}, (videos) => {
          this.setState({ videos })  //With ES6 we can compact { videos: videos }
        });
    }
    //VideoList will need a reference to the list of video
    //We need to pass from the parent component to the child component
    render() { 
        return (
        <div>
            <SearchBar />
            <VideoList videos= {this.state.videos}/>
        </div>
        );
    }
}

React.render(<App />, document.querySelector('.container'));



