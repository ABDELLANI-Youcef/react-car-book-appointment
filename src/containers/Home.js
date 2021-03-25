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
  let carsTable = null;
  if (carsList.length > 0) {
    carsTable = (
      <table>
        <thead>
          <tr>
            <th>Mark</th>
            <th>Model</th>
            <th>Fabrication year</th>
          </tr>
        </thead>
        <tbody>
          {carsList.map((e) => (
            <tr key={`${e.mark} ${e.model}`}>
              <td>{e.mark}</td>
              <td>{e.model}</td>
              <td>{e.year}</td>
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
