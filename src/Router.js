import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Home from './containers/Home';
import SignUp from './containers/SignUp';

const Router = ({ authToken }) => {
  if (authToken === '') {
    return (
      <BrowserRouter>
        <Route component={SignUp} />
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
};

Router.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  authToken: state,
});

export default connect(mapStateToProps)(Router);
