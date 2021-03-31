import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import URL from '../logic/url';

const Appointments = ({ appointments, cars }) => {
  const correspondCar = (carId) => {
    let i = 0;
    while (cars[i].id !== carId) {
      i += 1;
    }
    return cars[i];
  };
  return (
    <div className={styles.container}>
      <h1>Your already reserved appointments</h1>
      {appointments.map((a) => {
        const car = correspondCar(a.car_id);
        return (
          <div key={car.id}>

            <div key={car.id} className={styles.product_item}>

              <img src={`${URL}${car.image}`} alt={`${car.mark} ${car.model}`} className={styles.product_image} />
              <div>
                <div className={styles.product_detail}>
                  <span className={styles.detail_entry}>Mark:</span>
                  {car.mark}
                </div>
                <div className={styles.product_detail}>
                  <span className={styles.detail_entry}>Model:</span>
                  {car.model}
                </div>
                <div className={styles.product_detail}>
                  <span className={styles.detail_entry}>Year:</span>
                  {car.year}
                </div>
                <div className={styles.product_detail}>
                  <span className={styles.detail_entry}>City of reservation:</span>
                  {a.city}
                </div>
                <div className={styles.product_detail}>
                  <span className={styles.detail_entry}>Date of reservation:</span>
                  {a.date}
                </div>

              </div>
            </div>

          </div>
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
