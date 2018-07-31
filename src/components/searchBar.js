import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchBarValue: '',
    searchTerm: ''
  };

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="search-input"
            placeholder="Enter a city..."
            aria-describedby="cityHelp"
          />
          <small id="cityHelp" className="form-text text-muted">
            for example, London
          </small>
        </div>
        <button type="button" className="btn btn-info">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
