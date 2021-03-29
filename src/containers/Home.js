import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createCarsList } from '../actions/index';
import { carsListRequest, deleteCarRequest } from '../logic/carRequests';
import CarsTable from '../components/CarsTable';

const Home = ({ authentication, carsList, createCarsList }) => {
  useEffect(() => {
    if (carsList.length === 0) {
      carsListRequest(authentication.authToken, createCarsList);
    }
  }, []);

  const deleteCar = (carId) => {
    deleteCarRequest(authentication.authToken, carId, createCarsList);
  };

  let carsTable = null;
  if (carsList.length > 0) {
    carsTable = (
      <CarsTable admin={authentication.admin} cars={carsList} clickHandler={deleteCar} />
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
