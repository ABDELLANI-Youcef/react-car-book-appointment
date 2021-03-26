import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import AppointmentMaking from './containers/AppointmentMaking';
import Welcome from './components/Welcome';
import Navbar from './containers/Navbar';

const Router = ({ authToken }) => {
  if (authToken === '') {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route expact path="/login" component={Login} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/make-appointment" component={AppointmentMaking} />
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
