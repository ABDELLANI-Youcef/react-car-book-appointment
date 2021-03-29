import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const sendEditCar = async (auth, cardata, carId) => {
  try {
    const body = {
      mark: cardata.mark,
      model: cardata.model,
      year: cardata.year,
      price: cardata.price,
    };
    const options = {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth.authToken,
      },
      body: JSON.stringify(body),
    };
    await fetch(`http://[::1]:3000/cars/${carId}`, options);
    return true;
  } catch (error) {
    return false;
  }
};

const EditCarForm = ({ location, auth }) => {
  const { car } = location.state;
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
    if (auth.admin) {
      sendEditCar(auth, cardata, car.id);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mark_edit">
          mark:
          {' '}
          <input id="mark_edit" type="text" value={cardata.mark} onChange={handleChange} />
        </label>
        <label htmlFor="model_edit">
          model:
          {' '}
          <input id="model_edit" type="text" value={cardata.model} onChange={handleChange} />
        </label>
        <label htmlFor="year_edit">
          year:
          {' '}
          <input id="year_edit" type="number" value={cardata.year} onChange={handleChange} />
        </label>
        <label htmlFor="price_edit">
          Price:
          {' '}
          <input id="price_edit" type="number" value={cardata.price} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

EditCarForm.propTypes = {
  location: PropTypes.objectOf(PropTypes.any).isRequired,
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToProp)(EditCarForm);
