import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../logic/logic';
import { createToken } from '../actions/index';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Form.module.css';

const Login = ({ createToken, history }) => {
  const [status, setStatus] = useState(0);

  const handleSubmit = async (data) => {
    const answer = await login(createToken, data);
    setStatus(answer);
  };

  if (status === true) {
    history.push('/');
  }
  let result = '';
  if (status === true) {
    result = 'Redirecting to Home page';
  } else if (status === false) {
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
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(Login);
