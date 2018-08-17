import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import '../styling/searchBar.css';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  };

  onChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchCurrent(this.state.searchTerm);
    this.setState({
      searchTerm: ''
    });
  };

  render() {
    return (
      <div>
        <form className="form-container" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-input"
            placeholder="Enter a city"
            value={this.state.searchTerm}
            onChange={this.onChange}
            required
          />
          <button className="form-btn" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  };
}

export default connect(
  mapStateToProps,
  actions
)(SearchBar);
