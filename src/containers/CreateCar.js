import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const sendCreateCar = async (auth, carsdata) => {
  try {
    const body = {
      mark: carsdata.mark,
      model: carsdata.model,
      year: carsdata.year,
    };
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth.authToken,
      },
      body: JSON.stringify(body),
    };
    await fetch('http://[::1]:3000/cars/', options);
    return true;
  } catch (error) {
    return false;
  }
};

const CreateCar = ({ auth }) => {
  const [data, setData] = useState({
    mark: '',
    model: '',
    year: 2021,
  });

  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    let { mark, model, year } = data;
    switch (id) {
      case 'mark_input':
        mark = value;
        break;

      case 'model_input':
        model = value;
        break;

      default:
        year = parseInt(value, 10);
        break;
    }

    setData({ mark, model, year });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth.admin) {
      sendCreateCar(auth, data);
    }
  };

  return (
    <div>
      {auth.username}
      <form onSubmit={handleSubmit}>
        <label htmlFor="mark_input">
          Mark:
          {' '}
          <input id="mark_input" type="text" value={data.mark} onChange={handleChange} />
        </label>
        <label htmlFor="model_input">
          Model:
          {' '}
          <input id="model_input" type="text" value={data.model} onChange={handleChange} />
        </label>
        <label htmlFor="year_input">
          Year:
          {' '}
          <input id="year_input" type="number" value={data.year} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

CreateCar.propTypes = {
  auth: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToPorp = (state) => ({
  auth: state.authentication,
});

export default connect(mapStateToPorp)(CreateCar);
