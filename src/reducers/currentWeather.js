import { FETCH_CURRENT_WEATHER } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER:
      console.log(action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
