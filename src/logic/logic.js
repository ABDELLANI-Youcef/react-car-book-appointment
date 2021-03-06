import URL from './url';

const signUp = async (createToken, userdata) => {
  const body = {
    name: userdata.username,
    email: userdata.email,
    password: userdata.password,
    password_confirmation: userdata.confirmPassword,
  };
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${URL}/users`, options);
    const data = await response.json();

    const auth = {
      username: data.username,
      email: data.email,
      authToken: data.auth_token,
    };
    createToken(auth);
  } catch (error) {
    createToken(error);
  }
};

const login = async (createToken, userdata) => {
  const body = {
    email: userdata.email,
    password: userdata.password,
  };
  try {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${URL}/authentication`, options);
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error('Failed to login');
    }
    const auth = {
      username: data.username,
      email: data.email,
      authToken: data.auth_token,
      admin: data.admin,
    };
    createToken(auth);
    return true;
  } catch (error) {
    return false;
  }
};

export { login, signUp };
