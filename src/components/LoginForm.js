import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Login.module.css';

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
    <form onSubmit={handleSubmit} className={styles.form_div}>
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

      <input type="submit" value="submit" className={styles.submit} />
    </form>
  );
};

LoginForm.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default LoginForm;
