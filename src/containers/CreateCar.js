import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CreateCarForm from '../components/CreateCarForm';

const sendCreateCar = async (auth, carsdata) => {
  try {
    const formData = new FormData();
    formData.append('image', carsdata.imageFile);

    formData.set('mark', carsdata.mark);
    formData.set('model', carsdata.model);
    formData.set('year', carsdata.year);
    formData.set('price', carsdata.price);

    const options = {
      method: 'POST',
      headers: {

        Authorization: auth.authToken,
      },
      body: formData,
    };
    await fetch('http://[::1]:3000/cars/', options);
    return true;
  } catch (error) {
    return false;
  }
};

const CreateCar = ({ auth }) => {
  const handleClick = (data) => {
    if (auth.admin) {
      sendCreateCar(auth, data);
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
