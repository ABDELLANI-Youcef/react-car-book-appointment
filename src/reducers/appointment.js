import { CREATE_APPOINTMENTS_LIST, ADD_APPOINTMENT } from '../actions/index';

const defaultState = [];

const appointmentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENTS_LIST:
      return action.payload;

    case ADD_APPOINTMENT:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default appointmentsReducer;
