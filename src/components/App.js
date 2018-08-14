import React, { Component } from 'react';

import '../styling/App.css';

import SearchBar from './searchBar';
import SearchResult from './searchResult';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}

export default App;
