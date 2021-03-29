import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAppointment } from '../actions/index';
import AppointmentMakingForm from '../components/AppointmentMakingForm';
import createAppointmentRequest from '../logic/appointmentRequest';

const AppointmentMaking = ({
  userAuth, location, addAppointment,
}) => {
  const { car } = location.state;

  const handleClick = (dateCity) => {
    createAppointmentRequest(userAuth.authToken, car.id,
      dateCity, addAppointment);
  };

  let image = null;
  if (car.id !== null) {
    image = <img src={`http://[::1]:3000${car.image}`} alt="car" />;
  }
  return (
    <div>
      Welcome
      {' '}
      {userAuth.username}
      . would you like to make a new appointment for
      {' '}
      {car.mark}
      {' '}
      {car.model}
      {' '}
      {car.year}
      {' '}
      with id =
      {car.id}
      .
      <AppointmentMakingForm clickHandler={handleClick} />
      {image}
    </div>
  );
};
AppointmentMaking.propTypes = {
  userAuth: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  addAppointment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userAuth: state.authentication,
});

const mapDispatchToProps = {
  addAppointment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentMaking);
