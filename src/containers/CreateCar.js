import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateCarForm from '../components/CreateCarForm';
import { createCarRequest } from '../logic/carRequests';

const CreateCar = ({ auth }) => {
  const handleClick = (data) => {
    if (auth.admin) {
      createCarRequest(auth, data);
    }
  };

  return (
    <div>
      {auth.username}
      <CreateCarForm clickHandler={handleClick} />
    </div>
  );
};

CreateCar.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToPorp = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToPorp)(CreateCar);
