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

    const response = await fetch('http://localhost:3000/signup', options);
    const data = await response.json();

    createToken(data.auth_token);
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

    const response = await fetch('http://localhost:3000/auth/login', options);
    const data = await response.json();

    createToken(data.auth_token);
  } catch (error) {
    createToken(error);
  }
};

export { login, signUp };
