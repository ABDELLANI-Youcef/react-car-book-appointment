const simpleRequest = async () => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch('http://[::1]:3000/cars', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const Home = () => {
  simpleRequest();
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};
export default Home;
