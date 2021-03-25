import { CREATE_CARS_LIST } from '../actions/index';

const defaultList = [];

const carsListReducer = (state = defaultList, action) => {
  switch (action.type) {
    case CREATE_CARS_LIST:
      return action.payload;

    default:
      return state;
  }
};

export default carsListReducer;
