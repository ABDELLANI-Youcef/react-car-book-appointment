import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Router;
