import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditCarForm from '../components/EditCarForm';
import { editCarRequest } from '../logic/carRequests';

const EditCar = ({ location, auth }) => {
  const { car } = location.state;
  const history = useHistory();

  const handleSubmit = (cardata) => {
    if (auth.admin) {
      editCarRequest(auth, cardata, car.id);
    }
    history.push('/');
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
