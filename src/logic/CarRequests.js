export const editCarRequest = async (auth, cardata, carId) => {
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

export const createCarRequest = async (auth, carsdata) => {
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
