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

    const response = await fetch(`${URL}/signup`, options);
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

const login = async (createToken, createAppointmentsList, userdata, setStatus) => {
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

    const response = await fetch(`${URL}/auth/login`, options);
    const data = await response.json();
    if (response.status !== 200) {
      throw new Error('Failed to login');
    }
    setStatus(200);
    const auth = {
      username: data.username,
      email: data.email,
      authToken: data.auth_token,
      admin: data.admin,
    };
    createToken(auth);
    createAppointmentsList(data.appointments);
  } catch (error) {
    setStatus(401);
  }
};

export { login, signUp };
