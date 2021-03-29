import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form_div}>
      <div className={styles.div_label}>
        <label htmlFor="username" className={styles.input_line}>
          Username:
          {' '}
          <input id="username" type="text" value={data.username} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="email" className={styles.input_line}>
          E-mail:
          {' '}
          <input id="email" type="email" value={data.email} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="password" className={styles.input_line}>
          Password:
          {' '}
          <input id="password" type="password" value={data.password} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="confirmPassword" className={styles.input_line}>
          Confirm password:
          {' '}
          <input id="confirmPassword" type="password" value={data.confirmPassword} onChange={handleChange} />
        </label>
      </div>
      <input type="submit" value="submit" className={styles.submit} />
    </form>
  );
};

SignUpForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default SignUpForm;
