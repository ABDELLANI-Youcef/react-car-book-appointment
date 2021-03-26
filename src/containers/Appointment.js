import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const simpleAppointment = async (authToken, carId, date, city) => {
  try {
    const body = {
      city,
      date,
    };
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(`http://[::1]:3000/cars/${carId}/appointments`, options);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const Appointment = ({ userAuth, location }) => {
  const [dateCity, setDateCity] = useState({
    date: '',
    city: '',
  });
  const { car } = location.state;

  const handleChange = (e) => {
    let { city, date } = dateCity;
    const { value } = e.target;
    switch (e.target.id) {
      case 'appointmentCity':
        city = value;
        break;

      default:
        date = value;
        break;
    }
    setDateCity({ city, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    simpleAppointment(userAuth.authToken, car.id, dateCity.date, dateCity.city);
  };

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
      <form onSubmit={handleSubmit}>
        <div>

          <label htmlFor="appointmentCity">
            the city:
            {' '}
            <input id="appointmentCity" type="text" value={dateCity.city} onChange={handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="appointmentDate">
            date:
            {' '}
            <input id="appointmentDate" type="date" value={dateCity.date} onChange={handleChange} />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};
Appointment.propTypes = {
  userAuth: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  userAuth: state.authentication,
});

export default connect(mapStateToProps)(Appointment);
