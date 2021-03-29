import { useState } from 'react';
import PropTypes from 'prop-types';

const AppointmentMakingForm = ({ clickHandler }) => {
  const [dateCity, setDateCity] = useState({
    date: '',
    city: '',
  });

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
    clickHandler(dateCity);
  };
  return (
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
  );
};

AppointmentMakingForm.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default AppointmentMakingForm;
