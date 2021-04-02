import URL from './url';

export const createAppointmentRequest = async (authToken, carId, dateCity) => {
  try {
    const body = {
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
    await fetch(`${URL}/cars/${carId}/appointments`, options);
    return true;
  } catch (error) {
    return false;
  }
};

export const appointmentsListRequest = async (authToken, createAppointmentsList, page) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    const response = await fetch(`${URL}/appointments?page=${page}`, options);
    const data = await response.json();

    createAppointmentsList(data);
    return true;
  } catch (error) {
    return false;
  }
};
