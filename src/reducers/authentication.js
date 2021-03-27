import { CREATE_TOKEN, REMOVE_TOKEN } from '../actions/index';

const defaultState = {
  username: '',
  email: '',
  authToken: '',
  admin: false,
};

const authenticationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_TOKEN:
      return action.payload;

    case REMOVE_TOKEN:
      return defaultState;

    default:
      return state;
  }
};

export default authenticationReducer;
