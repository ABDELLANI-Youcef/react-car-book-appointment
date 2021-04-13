import URL from './url';

export const carsListRequest = async (authToken, createCarsList) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    const response = await fetch(`${URL}/cars`, options);
    const data = await response.json();
    createCarsList(data);
  } catch (error) {
    createCarsList(error);
  }
};

export const editCarRequest = async (authToken, cardata, carId, createCarsList) => {
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
        Authorization: authToken,
      },
      body: JSON.stringify(body),
    };
    await fetch(`${URL}/cars/${carId}`, options);
    carsListRequest(authToken, createCarsList);
    return true;
  } catch (error) {
    return false;
  }
};

export const createCarRequest = async (authToken, carsdata, createCarsList) => {
  try {
    const formData = new FormData();
    formData.append('image', carsdata.imageFile);

    formData.set('mark', carsdata.mark);
    formData.set('model', carsdata.model);
    formData.set('year', carsdata.year);
    formData.set('price', carsdata.price);

    const options = {
      method: 'POST',
      headers: {

        Authorization: authToken,
      },
      body: formData,
    };
    await fetch(`${URL}/cars/`, options);
    carsListRequest(authToken, createCarsList);
    return true;
  } catch (error) {
    return false;
  }
};

export const deleteCarRequest = async (authToken, carId, createCarsList) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    await fetch(`${URL}/cars/${carId}`, options);
    carsListRequest(authToken, createCarsList);
    return true;
  } catch (error) {
    return false;
  }
};
