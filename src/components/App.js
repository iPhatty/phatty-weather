import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styling/App.css';

import SearchBar from './searchBar';
import SearchResult from './searchResult';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <SearchBar />
        {this.props.currentWeather && (
          <SearchResult currentWeather={this.props.currentWeather} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  };
}

export default connect(mapStateToProps)(App);
