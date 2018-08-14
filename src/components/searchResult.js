import React from 'react';

const SearchResult = props => {
  const { name, main, weather } = props.currentWeather;
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
};

export default SearchResult;
