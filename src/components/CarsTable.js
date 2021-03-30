import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

const CarsTable = ({ cars, admin, clickHandler }) => {
  const handleClick = (e) => {
    const carId = parseInt(e.target.dataset.carId, 10);
    clickHandler(carId);
  };

  const k = cars.map((e) => {
    let deleteTD = null;
    let editTD = null;
    if (admin) {
      deleteTD = (<button type="button" data-car-id={e.id} onClick={handleClick}>Delete</button>);
      editTD = (<Link to={{ pathname: '/edit_car', state: { car: e } }}>edit the car</Link>);
    }
    return (
      <div key={e.id} className={styles.product_item}>
        <Link to={{ pathname: '/make-appointment', state: { car: e } }}>
          <img src={`https://youcef-cars-book-appointment.herokuapp.com${e.image}`} alt={`${e.mark} ${e.model}`} className={styles.product_image} />
        </Link>
        <div>
          <div className={styles.product_detail}>
            <span className={styles.detail_entry}>Mark:</span>
            {e.mark}
          </div>
          <div className={styles.product_detail}>
            <span className={styles.detail_entry}>Model:</span>
            {e.model}
          </div>
          <div className={styles.product_detail}>
            <span className={styles.detail_entry}>Year:</span>
            {e.year}
          </div>
          <div className={styles.product_detail}>
            {deleteTD}
            {editTD}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      { k }
    </div>
  );
};

CarsTable.propTypes = {
  admin: PropTypes.bool.isRequired,
  cars: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default CarsTable;
