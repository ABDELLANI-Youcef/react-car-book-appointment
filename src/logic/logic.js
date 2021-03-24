const signUp = async (createToken, userdata) => {
  console.log(userdata);
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
    console.log(options);
    const response = await fetch('http://localhost:3000/signup', options);
    const data = await response.json();
    console.log(data);

    createToken(data.auth_token);
  } catch (error) {
    createToken(error);
  }
};

export default signUp;
