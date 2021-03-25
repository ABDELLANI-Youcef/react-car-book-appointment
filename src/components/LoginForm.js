import { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ handleClick }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    let {
      email, password,
    } = data;
    switch (e.target.id) {
      case 'email':
        email = e.target.value;
        break;

      default:
        password = e.target.value;
        break;
    }
    setData({
      email, password,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(data);
  };
  return (
    <form onSubmit={handleSubmit}>
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

      <input type="submit" value="submit" />
    </form>
  );
};

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;
