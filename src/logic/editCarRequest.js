const sendEditCarRequest = async (auth, cardata, carId) => {
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

export default sendEditCarRequest;
