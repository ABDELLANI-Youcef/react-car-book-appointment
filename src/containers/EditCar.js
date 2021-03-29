import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditCarForm from '../components/EditCarForm';

const sendEditCar = async (auth, cardata, carId) => {
  try {
    const body = {
      mark: cardata.mark,
      model: cardata.model,
      year: cardata.year,
      price: cardata.price,
    };
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth.authToken,
      },
      body: JSON.stringify(body),
    };
    await fetch(`http://[::1]:3000/cars/${carId}`, options);
    return true;
  } catch (error) {
    return false;
  }
};

const EditCar = ({ location, auth }) => {
  const { car } = location.state;

  const handleSubmit = (cardata) => {
    if (auth.admin) {
      sendEditCar(auth, cardata, car.id);
    }
  };

  return (
    <div>
      <EditCarForm car={car} clickHandler={handleSubmit} />
    </div>
  );
};

EditCar.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProp)(EditCar);
