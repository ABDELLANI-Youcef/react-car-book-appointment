import URL from './url';

const createAppointmentRequest = async (authToken, carId, dateCity, addAppointment) => {
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
    const response = await fetch(`${URL}/cars/${carId}/appointments`, options);
    const data = await response.json();
    addAppointment(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default createAppointmentRequest;
