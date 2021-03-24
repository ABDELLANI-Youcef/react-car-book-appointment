import { CREATE_TOKEN } from '../actions/index';

const defaultState = '';

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      return action.payload;

    default:
      return state;
  }
};

export default authenticationReducer;
