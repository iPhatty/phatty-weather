import { FETCH_CURRENT_WEATHER } from './types';
import axios from 'axios';
import keys from '../config/keys';

export function fetchCurrent(city) {
  console.log(keys.API_KEY);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    keys.API_KEY
  }`;
  console.log(url);
  const response = axios.get(url);
  return {
    type: FETCH_CURRENT_WEATHER,
    payload: response
  };
}
