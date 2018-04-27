
import _ from 'lodash';
import React, { component } from 'react';
import ReactDOM from 'react-dom';
//import the search package we download
import YTSearch from 'youtube-api-youtube';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



//We want to refactor App to a class based component
//We want App can keep track of a list of video
//We used state for that
class App extends Component {
    constructor(props) {
        super(props)

        //We want to add the concept of selected video to App.state
        //It will be a video object
        //It will be always passed to VideoDetail
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        //We want a list of video present by default
        this.videoSearch('surfboards')
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,//With ES6 we can compact { videos: videos }
                selectedVideo: videos[0]
              })  
          });
    }

    //VideoList will need a reference to the list of video
    //We need to pass from the parent component to the child component
    render() { 
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList
                onVideoSelect={video => this.state({selectedVideo}) }
                videos= {this.state.videos}
                />
        </div>
        );
    }
}

React.render(<App />, document.querySelector('.container'));



