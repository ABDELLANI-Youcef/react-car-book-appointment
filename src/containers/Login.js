import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../logic/logic';
import { createToken, createAppointmentsList } from '../actions/index';
import LoginForm from '../components/LoginForm';

const Login = ({ createToken, createAppointmentsList, history }) => {
  const handleSubmit = (data) => {
    login(createToken, createAppointmentsList, data);
    history.push('/');
  };

  return (
    <div>
      <h1>Welcome to Sign up page</h1>
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
