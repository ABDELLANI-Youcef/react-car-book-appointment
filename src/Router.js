import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import Appointment from './containers/Appointment';
import Welcome from './components/Welcome';

const Router = ({ authToken }) => {
  if (authToken === '') {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route expact path="/login" component={Login} />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/appointment" component={Appointment} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state.authentication.authToken,
});

export default connect(mapStateToProps)(Router);
