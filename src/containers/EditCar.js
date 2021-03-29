import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EditCarForm from '../components/EditCarForm';
import { editCarRequest } from '../logic/CarRequests';

const EditCar = ({ location, auth }) => {
  const { car } = location.state;

  const handleSubmit = (cardata) => {
    if (auth.admin) {
      editCarRequest(auth, cardata, car.id);
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
