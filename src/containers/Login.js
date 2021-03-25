import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../logic/logic';
import { createToken } from '../actions/index';
import LoginForm from '../components/LoginForm';

const Login = ({ createToken, history }) => {
  const handleSubmit = (data) => {
    login(createToken, data);
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
  history: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(Login);
