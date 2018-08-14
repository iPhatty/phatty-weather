import React, { Component } from 'react';

import SearchBar from './searchBar';
import SearchResult from './searchResult';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchResult />
      </div>
    );
  }
}

export default App;
