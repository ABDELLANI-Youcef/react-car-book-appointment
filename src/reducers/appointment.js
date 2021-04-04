import {
  CREATE_APPOINTMENTS_LIST,
  SET_APPOINTMENT, REMOVE_APPOINTMENT,
} from '../actions/index';

const defaultState = { appointments: [], size: -1 };

const appointmentsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_APPOINTMENTS_LIST:
      return action.payload;

    case SET_APPOINTMENT:
      return [...state, action.appointment];
    case REMOVE_APPOINTMENT:
      return state.filter((id) => action.id !== id);

    default:
      return state;
  }
};

export default appointmentsReducer;
