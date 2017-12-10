import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDuzEb5NLwG8lOw_-GBggpol14c2VNtxGQ'
// Create new component.
// This component should produce some HTML.
// function () is the same as () => its just ES6, the value of 'this' is slightly different
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'))

