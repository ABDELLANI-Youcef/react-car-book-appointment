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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
