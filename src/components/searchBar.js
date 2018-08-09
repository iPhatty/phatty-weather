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
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Enter a city..."
            aria-describedby="cityHelp"
            value={this.state.searchTerm}
            onChange={this.onChange}
          />
          <small id="cityHelp" className="form-text text-muted">
            for example, London
          </small>
        </div>
        <button type="submit" className="btn btn-info">
          Search
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(SearchBar);
