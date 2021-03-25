import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createCarsList } from '../actions/index';

const simpleRequest = async (authToken, createCarsList) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    const response = await fetch('http://[::1]:3000/cars', options);
    const data = await response.json();

    createCarsList(data);
  } catch (error) {
    createCarsList(error);
  }
};

const Home = ({ authToken, carsList, createCarsList }) => {
  useEffect(() => {
    if (carsList.length === 0) {
      simpleRequest(authToken, createCarsList);
    }
  }, []);

  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

Home.propTypes = {
  authToken: PropTypes.string.isRequired,
  createCarsList: PropTypes.func.isRequired,
  carsList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  authToken: state.authentication,
  carsList: state.carsList,
});

const mapDispatchToProps = {
  createCarsList,
};
export default connect(mapStateToProp, mapDispatchToProps)(Home);
