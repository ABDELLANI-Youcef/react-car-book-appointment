import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CarsTable = ({ cars, admin, clickHandler }) => {
  let deleteTH = null;
  let editTH = null;
  const handleClick = (e) => {
    const carId = parseInt(e.target.dataset.carId, 10);
    clickHandler(carId);
  };

  if (admin) {
    deleteTH = (<th>delete the car</th>);
    editTH = (<th>edit the car</th>);
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Mark</th>
          <th>Model</th>
          <th>Fabrication year</th>
          <th>Price of trying</th>
          <th>make appointment</th>
          {deleteTH}
          {editTH}
        </tr>
      </thead>
      <tbody>
        {cars.map((e) => {
          let deleteTD = null;
          let editTD = null;
          if (admin) {
            deleteTD = (<td><button type="button" data-car-id={e.id} onClick={handleClick}>Delete</button></td>);
            editTD = (<td><Link to={{ pathname: '/edit_car', state: { car: e } }}>edit the car</Link></td>);
          }
          return (
            <tr key={`${e.mark} ${e.model}`}>
              <td>{e.mark}</td>
              <td>{e.model}</td>
              <td>{e.year}</td>
              <td>{e.price}</td>
              <td><Link to={{ pathname: '/make-appointment', state: { car: e } }}>Make appointment</Link></td>
              {deleteTD}
              {editTD}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

CarsTable.propTypes = {
  admin: PropTypes.bool.isRequired,
  cars: PropTypes.arrayOf(PropTypes.any).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default CarsTable;
