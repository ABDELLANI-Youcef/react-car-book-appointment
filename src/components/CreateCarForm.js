import { useState } from 'react';
import PropTypes from 'prop-types';

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="mark_input">
        Mark:
        {' '}
        <input id="mark_input" type="text" value={carData.mark} onChange={handleChange} />
      </label>
      <label htmlFor="model_input">
        Model:
        {' '}
        <input id="model_input" type="text" value={carData.model} onChange={handleChange} />
      </label>
      <label htmlFor="year_input">
        Year:
        {' '}
        <input id="year_input" type="number" value={carData.year} onChange={handleChange} />
      </label>
      <label htmlFor="price_input">
        Price:
        {' '}
        <input id="price_input" type="number" value={carData.price} onChange={handleChange} />
      </label>
      <label htmlFor="image_input">
        Car image:
        {' '}
        <input id="image_input" type="file" value={carData.image} onChange={handleChange} />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
};

CreateCarForm.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CreateCarForm;
