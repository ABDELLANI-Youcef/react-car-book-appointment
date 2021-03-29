import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Router from './Router';
import authenticationReducer from './reducers/authentication';
import carsListReducer from './reducers/car';
import appointmentsReducer from './reducers/appointment';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  carsList: carsListReducer,
  appointment: appointmentsReducer,
});

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root'),
);
