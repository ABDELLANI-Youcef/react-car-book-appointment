const CREATE_TOKEN = 'CREATE_TOKEN';

const createToken = (token) => ({
  type: CREATE_TOKEN,
  payload: token,
});

export { CREATE_TOKEN, createToken };
