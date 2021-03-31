import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../logic/logic';
import { createToken, createAppointmentsList } from '../actions/index';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Form.module.css';

const Login = ({ createToken, createAppointmentsList, history }) => {
  const [status, setStatus] = useState(0);

  const handleSubmit = (data) => {
    login(createToken, createAppointmentsList, data, setStatus);
  };

  if (status === 200) {
    history.push('/');
  }
  let result = '';
  if (status === 200) {
    result = 'Redirecting to Home page';
  } else if (status === 401) {
    result = 'The email or the password is wrong';
  }

  return (
    <div className={styles.container}>
      <h1>Welcome to Log In page</h1>
      <LoginForm handleClick={handleSubmit} />
      {result}
    </div>
  );
};

Login.propTypes = {
  createToken: PropTypes.func.isRequired,
  createAppointmentsList: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProp = {
  createToken,
  createAppointmentsList,
};

export default connect(null, mapDispatchToProp)(Login);
