import React from 'react';
import { connect } from 'react-redux';

const SearchResult = props => {
  return <div>Search Result</div>;
};

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  };
}

export default connect(mapStateToProps)(SearchResult);
