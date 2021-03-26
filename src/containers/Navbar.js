import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ authToken }) => {
  if (authToken !== '') {
    return null;
  }
  return (
    <div>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

Navbar.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProp = (state) => ({ authToken: state.authentication.authToken });

export default connect(mapStateToProp)(Navbar);
