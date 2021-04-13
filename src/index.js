import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import authenticationReducer from './reducers/authentication';
import carsListReducer from './reducers/car';
import appointmentsReducer from './reducers/appointment';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authentication'],
};

const combinedReducer = combineReducers({
  authentication: authenticationReducer,
  carsList: carsListReducer,
  appointment: appointmentsReducer,
});

const rootReducer = persistReducer(persistConfig, combinedReducer);
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  /* eslint-enable */

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
