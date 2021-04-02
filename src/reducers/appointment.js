import { CREATE_APPOINTMENTS_LIST } from '../actions/index';

const defaultState = { appointments: [], size: -1 };

const appointmentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENTS_LIST:
      return action.payload;

    default:
      return state;
  }
};

export default appointmentsReducer;
