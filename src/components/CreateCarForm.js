import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Form.module.css';

const CreateCarForm = ({ clickHandler }) => {
  const [carData, setCarData] = useState({
    mark: '',
    model: '',
    year: 2021,
    price: 0,
    image: '',
    imageFile: '',
  });

  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    const { files } = e.target;
    let {
      mark, model, year, image, imageFile, price,
    } = carData;
    switch (id) {
      case 'mark_input':
        mark = value;
        break;

      case 'model_input':
        model = value;
        break;

      case 'image_input':
        image = value;
        [imageFile] = files;
        break;

      case 'year_input':
        year = parseInt(value, 10);
        break;

      default:
        price = parseInt(value, 10);
        break;
    }

    setCarData({
      mark, model, year, image, imageFile, price,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clickHandler(carData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form_div}>
      <div className={styles.div_label}>
        <label htmlFor="mark_input" className={styles.input_line}>
          Mark:
          {' '}
          <input id="mark_input" type="text" value={carData.mark} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="model_input" className={styles.input_line}>
          Model:
          {' '}
          <input id="model_input" type="text" value={carData.model} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="year_input" className={styles.input_line}>
          Year:
          {' '}
          <input id="year_input" type="number" value={carData.year} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="price_input" className={styles.input_line}>
          Price:
          {' '}
          <input id="price_input" type="number" value={carData.price} onChange={handleChange} />
        </label>
      </div>
      <div className={styles.div_label}>
        <label htmlFor="image_input" className={styles.input_line}>
          Car image:
          {' '}
          <input id="image_input" type="file" value={carData.image} onChange={handleChange} />
        </label>
      </div>
      <input type="submit" value="submit" className={styles.submit} />
    </form>
  );
};

CreateCarForm.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CreateCarForm;
