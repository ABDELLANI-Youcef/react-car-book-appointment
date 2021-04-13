import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppointmentMakingForm from '../components/AppointmentMakingForm';
import { createAppointmentRequest } from '../logic/appointmentRequest';
import styles from '../styles/AppointmentMaking.module.css';
import stylesForm from '../styles/Form.module.css';
import URL from '../logic/url';

const AppointmentMaking = ({
  userAuth, location,
}) => {
  const { car } = location.state;
  const history = useHistory();

  const handleClick = (dateCity) => {
    createAppointmentRequest(userAuth.authToken, car.id,
      dateCity);
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
};

const mapStateToProps = (state) => ({
  userAuth: state.authentication,
});

export default connect(mapStateToProps)(AppointmentMaking);
