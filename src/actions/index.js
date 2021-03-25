const CREATE_TOKEN = 'CREATE_TOKEN';
const CREATE_CARS_LIST = 'CREATE_CARS_LIST';

const createToken = (token) => ({
  type: CREATE_TOKEN,
  payload: token,
});

const createCarsList = (list) => ({
  type: CREATE_CARS_LIST,
  payload: list,
});

export {
  CREATE_TOKEN, createToken, CREATE_CARS_LIST, createCarsList,
};
