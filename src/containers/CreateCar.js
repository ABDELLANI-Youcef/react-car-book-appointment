import { useState } from 'react';

const CreateCar = () => {
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

  return (
    <div>
      <form>
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

export default CreateCar;
