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

    this.state = { videos: [] };

    YTSearch({key: YT_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // => is shorthand for 'function'
      //key and value are both videos { videos: videos}
    });
  }

  render() {
    return (
     <div>
       <SearchBar />
       <VideoDetail video={this.state.videos[0]} />
       <VideoList videos={this.state.videos} />
     </div>
    );
  }
}

// Take this component's HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'))

