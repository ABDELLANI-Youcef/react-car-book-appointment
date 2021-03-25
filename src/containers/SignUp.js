import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signUp from '../logic/logic';
import { createToken } from '../actions/index';
import SignUpForm from '../components/SignUpForm';

const Login = ({ createToken }) => {
  const handleSubmit = (data) => {
    signUp(createToken, data);
  };

  return (
    <div>
      <h1>Welcome to Sign up page</h1>
      <SignUpForm handleClick={handleSubmit} />
    </div>
  );
};

Login.propTypes = {
  createToken: PropTypes.func.isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(Login);
