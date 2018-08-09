import { FETCH_CURRENT_WEATHER } from './types';
import axios from 'axios';

const env = require('env2')('../../.env');

export function fetchCurrent(city) {
  const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    process.env.API_KEY
  }`;
  console.log(url);
  axios.get(url).then(data => {
    console.log(data);
    return {
      type: FETCH_CURRENT_WEATHER,
      payload: data
    };
  });
}
