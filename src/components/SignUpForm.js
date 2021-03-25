import { useState } from 'react';
import PropTypes from 'prop-types';

const SignUpForm = ({ handleClick }) => {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    let {
      username, email, password, confirmPassword,
    } = data;
    switch (e.target.id) {
      case 'username':
        username = e.target.value;
        break;

      case 'email':
        email = e.target.value;
        break;

      case 'password':
        password = e.target.value;
        break;

      default:
        confirmPassword = e.target.value;
        break;
    }
    setData({
      username, email, password, confirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">
        Username:
        {' '}
        <input id="username" type="text" value={data.username} onChange={handleChange} />
      </label>
      <label htmlFor="email">
        E-mail:
        {' '}
        <input id="email" type="email" value={data.email} onChange={handleChange} />
      </label>
      <label htmlFor="password">
        Password:
        {' '}
        <input id="password" type="password" value={data.password} onChange={handleChange} />
      </label>
      <label htmlFor="confirmPassword">
        Confirm password:
        {' '}
        <input id="confirmPassword" type="password" value={data.confirmPassword} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

SignUpForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignUpForm;
