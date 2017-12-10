import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyDuzEb5NLwG8lOw_-GBggpol14c2VNtxGQ'



// Create new component.
// This component should produce some HTML.
// function () is the same as () => its just ES6, the value of 'this' is slightly different
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term){
    YTSearch({key: YT_API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      // => is shorthand for 'function'
      //key and value are both videos { videos: videos}
    });

  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 900);

    return (
     <div>
       <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
     </div>
    );
  }
}

// Take this component's HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'))

