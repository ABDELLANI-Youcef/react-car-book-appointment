import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../logic/logic';
import { createToken } from '../actions/index';
import SignUpForm from '../components/SignUpForm';

const SignUp = ({ createToken }) => {
  const handleSubmit = (data) => {
    signUp(createToken, data);
  };

  return (
    <div>
      <h1>Welcome to Sign up page</h1>
      <SignUpForm handleClick={handleSubmit} />
      <Link to="/login">You have already an account?</Link>
    </div>
  );
};

SignUp.propTypes = {
  createToken: PropTypes.func.isRequired,
};

const mapDispatchToProp = {
  createToken,
};

export default connect(null, mapDispatchToProp)(SignUp);
