import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const sendCreateCar = async (auth, carsdata) => {
  try {
    const formData = new FormData();
    formData.append('image', carsdata.imageFile);

    formData.set('mark', carsdata.mark);
    formData.set('model', carsdata.model);
    formData.set('year', carsdata.year);

    const options = {
      method: 'POST',
      headers: {

        Authorization: auth.authToken,
      },
      body: formData,
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
    image: '',
    imageFile: '',
  });

  const handleChange = (e) => {
    const { id } = e.target;
    const { value } = e.target;
    const { files } = e.target;
    let {
      mark, model, year, image, imageFile,
    } = data;
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

      default:
        year = parseInt(value, 10);
        break;
    }

    setData({
      mark, model, year, image, imageFile,
    });
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
        <label htmlFor="image_input">
          Car image:
          {' '}
          <input id="image_input" type="file" value={data.image} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>

      <img src={data.imageFile} alt="car" />
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
