import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';

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
      <div className={styles.div_label}>

        <label htmlFor="appointmentCity" className={styles.input_line}>
          the city:
          <input id="appointmentCity" type="text" value={dateCity.city} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="appointmentDate" className={styles.input_line}>
          date:
          <input id="appointmentDate" type="date" value={dateCity.date} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <input type="submit" value="Submit" className={styles.submit} />
      </div>
    </form>
  );
};

AppointmentMakingForm.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default AppointmentMakingForm;
