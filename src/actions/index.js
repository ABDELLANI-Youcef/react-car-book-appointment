const CREATE_TOKEN = 'CREATE_TOKEN';
const REMOVE_TOKEN = 'REMOVE_TOKEN';
const CREATE_CARS_LIST = 'CREATE_CARS_LIST';
const CREATE_APPOINTMENT = 'CREATE_APPOINTMENT';

const createToken = (token) => ({
  type: CREATE_TOKEN,
  payload: token,
});

const removeToken = () => ({
  type: REMOVE_TOKEN,
});

const createCarsList = (list) => ({
  type: CREATE_CARS_LIST,
  payload: list,
});

const createAppointmentsList = (list) => ({
  type: CREATE_APPOINTMENT,
  payload: list,
});

export {
  CREATE_TOKEN, createToken, CREATE_CARS_LIST, createCarsList, REMOVE_TOKEN, removeToken,
  CREATE_APPOINTMENT, createAppointmentsList,
};
