import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../logic/logic';
import { createToken, createAppointmentsList } from '../actions/index';
import LoginForm from '../components/LoginForm';
import styles from '../styles/Form.module.css';

const Login = ({ createToken, createAppointmentsList, history }) => {
  const handleSubmit = (data) => {
    login(createToken, createAppointmentsList, data);
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Welcome to Log In page</h1>
      <LoginForm handleClick={handleSubmit} />
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
