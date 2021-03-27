import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Appointments = ({ appointments, cars }) => {
  const correspondCar = (carId) => {
    let i = 0;
    while (cars[i].id !== carId) {
      i += 1;
    }
    return cars[i];
  };
  return (
    <div>
      {appointments.map((a) => {
        const car = correspondCar(a.car_id);
        return (
          <p key={a.id}>
            {a.city}
            {' '}
            {car.mark}
          </p>
        );
      })}
    </div>
  );
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
  cars: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  appointments: state.appointment,
  cars: state.carsList,
});

export default connect(mapStateToProp)(Appointments);
