import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CreateCarForm from '../components/CreateCarForm';
import { createCarRequest } from '../logic/carRequests';
import { createCarsList } from '../actions/index';
import styles from '../styles/Form.module.css';

const CreateCar = ({ auth, createCarsList }) => {
  const history = useHistory();
  const handleClick = (data) => {
    if (auth.admin) {
      createCarRequest(auth.authToken, data, createCarsList);
    }
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Create a new car</h1>
      <CreateCarForm clickHandler={handleClick} />
    </div>
  );
};

CreateCar.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
  createCarsList: PropTypes.func.isRequired,
};

const mapStateToPorp = (state) => ({
  auth: state.authentication,
});

const mapDispatchToProps = {
  createCarsList,
};

export default connect(mapStateToPorp, mapDispatchToProps)(CreateCar);
