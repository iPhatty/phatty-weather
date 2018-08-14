import React from 'react';
import { connect } from 'react-redux';

const SearchResult = props => {
  const { name, main, weather } = props.currentWeather;
  if (Object.keys(props.currentWeather).length > 0) {
    return (
      <div>
        <h2>{name}</h2>
        <h3>{weather[0].main}</h3>
        <h3>
          Temp: {Math.round(main.temp)}
          &deg;C
        </h3>
        <h3>Humidity: {main.humidity}%</h3>
      </div>
    );
  }
  return <h1>Phatty Weather</h1>;
};

function mapStateToProps(state) {
  return {
    currentWeather: state.currentWeather
  };
}

export default connect(mapStateToProps)(SearchResult);
