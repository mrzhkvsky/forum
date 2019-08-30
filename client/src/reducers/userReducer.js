/* eslint-disable indent */
import { FETCH_USERDATA } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_USERDATA:
      return action.payload || false;
    default:
      return state;
  }
};
