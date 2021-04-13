import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import EditCarForm from '../components/EditCarForm';
import { editCarRequest } from '../logic/carRequests';
import { createCarsList } from '../actions/index';
import styles from '../styles/Form.module.css';

const EditCar = ({ location, auth, createCarsList }) => {
  const { car } = location.state;
  const history = useHistory();

  const handleSubmit = (cardata) => {
    if (auth.admin) {
      editCarRequest(auth.authToken, cardata, car.id, createCarsList);
    }
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Edit the car</h1>
      <EditCarForm car={car} clickHandler={handleSubmit} />
    </div>
  );
};

EditCar.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  createCarsList: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  auth: state.authentication,
});

const mapDispatchToProps = {
  createCarsList,
};

export default connect(mapStateToProp, mapDispatchToProps)(EditCar);
