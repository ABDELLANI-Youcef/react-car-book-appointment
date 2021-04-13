import URL from './url';

export const createAppointmentRequest = async (authToken, carId, dateCity) => {
  try {
    const body = {
      car_id: carId,
      city: dateCity.city,
      date: dateCity.date,
    };
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
      body: JSON.stringify(body),
    };
    await fetch(`${URL}/appointments`, options);
    return true;
  } catch (error) {
    return false;
  }
};

export const appointmentsListRequest = async (authToken, createAppointmentsList, page, id) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    const response = await fetch(`${URL}/users/${id}/appointments?page=${page}`, options);
    const data = await response.json();

    createAppointmentsList(data.appointments);
    return data.size;
  } catch (error) {
    return 0;
  }
};
