import React, { Component } from 'react';

// {Component} pulls off just the Component part and allows us to access it *sugar
// const Component = React.Component;

// const SearchBar = () => {
//   return <input />
// };

// class SearchBar extends React.Component {
//   render() {
//     return <input />;
//   }
// }

//class based components are used when you're using state
//functional components can contain class based ones
//functionl components are used for input and spitting out output
//use functional components unless you need added functionality. Then refactor it to a class.

// class SearchBar extends Component {
//   render() {
//     return <input onChange={this.onInputChange} />;
//   }


//arrow functions are used as shorthand

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; //{ term: '' } is an object, this is the only time we manual state
  }

  render() {
    // this.state.term = event.target.value BAD! **use setState** GOOD!
    return (
      <div className="search-bar">
       <input
       value={this.state.term}
       onChange={event => this.onInputChange(event.target.value)}  />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

//the value of the imput is equal to the state
export default SearchBar;
