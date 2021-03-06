import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../styles/Home.module.css';
import URL from '../logic/url';
import { createAppointmentsList, createCarsList } from '../actions/index';
import { carsListRequest } from '../logic/carRequests';
import { appointmentsListRequest } from '../logic/appointmentRequest';

const Appointments = ({
  authentication, appointments, cars, createAppointmentsList, createCarsList,
}) => {
  useEffect(() => {
    if (cars.length === 0) {
      carsListRequest(authentication.authToken, createCarsList);
    }
  }, []);
  const [size, setSize] = useState(0);
  const [page, setPage] = useState(0);
  useEffect(async () => {
    if (cars.length === 0) {
      carsListRequest(authentication.authToken, createCarsList);
    }
    const total = await appointmentsListRequest(authentication.authToken, createAppointmentsList,
      page + 1, authentication.id);
    setSize(total);
  }, [page]);

  const handlePageClick = (data) => {
    const { selected } = data;
    setPage(selected);
  };

  if (appointments.size === 0 || cars.length === 0) {
    return <p>Sorry, you don&apost have any appointments</p>;
  }
  const count = Math.floor((size - 1) / 6) + 1;
  const pagination = (
    <ReactPaginate
      previousLabel="previous"
      nextLabel="next"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={count}
      initialPage={0}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={styles.pagination}
      subContainerClassName="pages pagination"
      activeClassName={styles.active}
      pageClassName={styles.page}
    />
  );

  const correspondCar = (carId) => {
    let i = 0;
    while (cars[i].id !== carId) {
      i += 1;
    }
    return cars[i];
  };
  return (
    <div className={styles.container}>
      <h1>Your already reserved appointments</h1>
      <div className={styles.product_list}>
        {appointments.map((a) => {
          const car = correspondCar(a.car_id);
          return (
            <div key={a.id}>

              <div className={styles.product_item}>

                <img src={`${URL}${car.image}`} alt={`${car.mark} ${car.model}`} className={styles.product_image} />
                <div>
                  <div className={styles.product_detail}>
                    <span className={styles.detail_entry}>Mark:</span>
                    {car.mark}
                  </div>
                  <div className={styles.product_detail}>
                    <span className={styles.detail_entry}>Model:</span>
                    {car.model}
                  </div>
                  <div className={styles.product_detail}>
                    <span className={styles.detail_entry}>Year:</span>
                    {car.year}
                  </div>
                  <div className={styles.product_detail}>
                    <span className={styles.detail_entry}>City of reservation:</span>
                    {a.city}
                  </div>
                  <div className={styles.product_detail}>
                    <span className={styles.detail_entry}>Date of reservation:</span>
                    {a.date}
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>
      {pagination}
    </div>
  );
};

Appointments.propTypes = {
  authentication: PropTypes.objectOf(PropTypes.any).isRequired,
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
  cars: PropTypes.arrayOf(PropTypes.any).isRequired,
  createAppointmentsList: PropTypes.func.isRequired,
  createCarsList: PropTypes.func.isRequired,

};

const mapStateToProp = (state) => ({
  authentication: state.authentication,
  appointments: state.appointment,
  cars: state.carsList,
});

const mapDispatchToProps = {
  createAppointmentsList,
  createCarsList,
};

export default connect(mapStateToProp, mapDispatchToProps)(Appointments);
