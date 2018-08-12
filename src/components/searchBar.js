import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
    console.log('search!');
    e.preventDefault();
    this.props.fetchCurrent(this.state.searchTerm);
    this.setState({
      searchTerm: ''
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          id="search-input"
          placeholder="Enter a city"
          aria-describedby="cityHelp"
          value={this.state.searchTerm}
          onChange={this.onChange}
          required
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(SearchBar);
