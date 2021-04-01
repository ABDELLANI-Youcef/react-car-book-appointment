import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { addAppointment } from '../actions/index';
import AppointmentMakingForm from '../components/AppointmentMakingForm';
import { createAppointmentRequest } from '../logic/appointmentRequest';
import styles from '../styles/AppointmentMaking.module.css';
import stylesForm from '../styles/Form.module.css';
import URL from '../logic/url';

const AppointmentMaking = ({
  userAuth, location, addAppointment,
}) => {
  const { car } = location.state;
  const history = useHistory();

  const handleClick = (dateCity) => {
    createAppointmentRequest(userAuth.authToken, car.id,
      dateCity, addAppointment);
    history.push('/');
  };

  let image = null;
  if (car.id !== null) {
    image = <img src={`${URL}${car.image}`} alt="car" className={styles.product_image} />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.product_details}>
        {image}
        <div>
          <ul>
            <li>
              <span className={styles.details_title}>
                Mark:
              </span>
              {car.mark}
            </li>
            <li>
              <span className={styles.details_title}>
                Model:
              </span>
              {car.model}
            </li>
            <li>
              <span className={styles.details_title}>
                Manufacturing year:
              </span>
              {car.year}
            </li>
            <li>
              <span className={styles.details_title}>
                The fees to try it:
              </span>
              {car.price}
              $
            </li>

          </ul>
        </div>
      </div>
      <div className={stylesForm.container}>
        <AppointmentMakingForm clickHandler={handleClick} />
      </div>
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
