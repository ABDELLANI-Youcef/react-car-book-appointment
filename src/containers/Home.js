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

const deleteCarRequest = async (authToken, carId) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    await fetch(`http://[::1]:3000/cars/${carId}`, options);

    return true;
  } catch (error) {
    return false;
  }
};

const Home = ({ authentication, carsList, createCarsList }) => {
  useEffect(() => {
    if (carsList.length === 0) {
      simpleRequest(authentication.authToken, createCarsList);
    }
  }, []);

  const deleteCar = (e) => {
    const carId = parseInt(e.target.dataset.carId, 10);
    deleteCarRequest(authentication.authToken, carId);
  };

  let carsTable = null;
  let deleteTH = null;
  let editTH = null;

  if (carsList.length > 0) {
    if (authentication.admin) {
      deleteTH = (<th>delete the car</th>);
      editTH = (<th>edit the car</th>);
    }
    carsTable = (
      <table>
        <thead>
          <tr>
            <th>Mark</th>
            <th>Model</th>
            <th>Fabrication year</th>
            <th>Price of trying</th>
            <th>make appointment</th>
            {deleteTH}
            {editTH}
          </tr>
        </thead>
        <tbody>
          {carsList.map((e) => {
            let deleteTD = null;
            let editTD = null;
            if (authentication.admin) {
              deleteTD = (<td><button type="button" data-car-id={e.id} onClick={deleteCar}>delete the car</button></td>);
              editTD = (<td><Link to={{ pathname: '/edit_car', state: { car: e } }}>edit the car</Link></td>);
            }
            return (
              <tr key={`${e.mark} ${e.model}`}>
                <td>{e.mark}</td>
                <td>{e.model}</td>
                <td>{e.year}</td>
                <td>{e.price}</td>
                <td><Link to={{ pathname: '/make-appointment', state: { car: e } }}>Make appointment</Link></td>
                {deleteTD}
                {editTD}
              </tr>
            );
          })}
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
