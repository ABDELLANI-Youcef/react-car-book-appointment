import {
  LIST_APPOINTMENTS,
  SET_APPOINTMENT, REMOVE_APPOINTMENT,
} from '../actions/index';

const appointmentsReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_APPOINTMENTS:
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
