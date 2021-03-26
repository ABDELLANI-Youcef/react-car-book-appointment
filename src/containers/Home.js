import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const Home = ({ authentication, carsList, createCarsList }) => {
  useEffect(() => {
    if (carsList.length === 0) {
      simpleRequest(authentication.authToken, createCarsList);
    }
  }, []);

  let carsTable = null;
  if (carsList.length > 0) {
    carsTable = (
      <table>
        <thead>
          <tr>
            <th>Mark</th>
            <th>Model</th>
            <th>Fabrication year</th>
            <th>make appointment</th>
          </tr>
        </thead>
        <tbody>
          {carsList.map((e) => (
            <tr key={`${e.mark} ${e.model}`}>
              <td>{e.mark}</td>
              <td>{e.model}</td>
              <td>{e.year}</td>
              <td><Link to={{ pathname: '/appointment', state: { car: e } }}>Make appointment</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

    );
  }

  return (
    <div>
      <h1>Welcome Home</h1>
      {carsTable}

    </div>
  );
};

Home.propTypes = {
  authentication: PropTypes.objectOf(PropTypes.any).isRequired,
  createCarsList: PropTypes.func.isRequired,
  carsList: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  authentication: state.authentication,
  carsList: state.carsList,
});

const mapDispatchToProps = {
  createCarsList,
};
export default connect(mapStateToProp, mapDispatchToProps)(Home);
