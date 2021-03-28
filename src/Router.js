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
import Appointments from './containers/Appointments';
import CreateCar from './containers/CreateCar';
import EditCarForm from './containers/EditCarForm';

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
        <Route exact path="/create_car" component={CreateCar} />
        <Route exact path="/edit_car" component={EditCarForm} />
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/make-appointment" component={AppointmentMaking} />
        <Route exact path="/appointments" component={Appointments} />
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
