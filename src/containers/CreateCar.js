import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import CreateCarForm from '../components/CreateCarForm';
import { createCarRequest } from '../logic/carRequests';

const CreateCar = ({ auth }) => {
  const history = useHistory();
  const handleClick = (data) => {
    if (auth.admin) {
      createCarRequest(auth, data);
    }
    history.push('/');
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
