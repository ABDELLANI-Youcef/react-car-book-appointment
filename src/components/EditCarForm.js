import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';

const EditCarForm = ({ car, clickHandler }) => {
  const [cardata, setCardata] = useState({
    mark: car.mark,
    model: car.model,
    year: car.year,
    price: car.price,
  });
  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    let {
      mark, model, year, price,
    } = cardata;
    switch (id) {
      case 'mark_edit':
        mark = value;
        break;

      case 'model_edit':
        model = value;
        break;

      case 'year_edit':
        year = parseInt(value, 10);
        break;

      default:
        price = parseInt(value, 10);
        break;
    }
    setCardata({
      mark, model, year, price,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clickHandler(cardata);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_div}>
      <div className={styles.div_label}>
        <label htmlFor="mark_edit" className={styles.input_line}>
          mark:
          {' '}
          <input id="mark_edit" type="text" value={cardata.mark} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="model_edit" className={styles.input_line}>
          model:
          {' '}
          <input id="model_edit" type="text" value={cardata.model} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="year_edit" className={styles.input_line}>
          year:
          {' '}
          <input id="year_edit" type="number" value={cardata.year} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="price_edit" className={styles.input_line}>
          Price:
          {' '}
          <input id="price_edit" type="number" value={cardata.price} onChange={handleChange} />
        </label>
      </div>
      <input type="submit" value="submit" className={styles.submit} />
    </form>
  );
};

EditCarForm.propTypes = {
  car: PropTypes.objectOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default EditCarForm;
