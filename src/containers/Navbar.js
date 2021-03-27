import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { removeToken } from '../actions/index';

const Navbar = ({ authToken, removeToken }) => {
  const history = useHistory();
  const logout = () => {
    removeToken();
    history.push('/');
  };

  let adminText = null;

  if (authToken.admin) {
    adminText = (
      <p>
        Welcome Admin;
        <Link to="/create_car">Create a car?</Link>
      </p>
    );
  }

  if (authToken.authToken !== '') {
    return (
      <div>
        <button type="button" onClick={logout}>Log out</button>
        <Link to="/appointments">Appointments</Link>
        {adminText}
      </div>
    );
  }
  return (
    <div>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
};

Navbar.propTypes = {
  authToken: PropTypes.objectOf(PropTypes.any).isRequired,
  removeToken: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({ authToken: state.authentication });
const mapDispatchToProps = {
  removeToken,
};

export default connect(mapStateToProp, mapDispatchToProps)(Navbar);
