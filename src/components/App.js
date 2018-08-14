import React, { Component } from 'react';

import '../styling/App.css';

import SearchBar from './searchBar';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
