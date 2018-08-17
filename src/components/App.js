import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styling/App.css';

import SearchBar from './searchBar';
import SearchResult from './searchResult';
import Background from './background';

class App extends Component {
  render() {
    const { currentWeather } = this.props;
    return (
      <div className="app-container">
        <Background weatherId={currentWeather && currentWeather.weather[0].id}>
          <SearchBar />
          {currentWeather && <SearchResult currentWeather={currentWeather} />}
        </Background>
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
