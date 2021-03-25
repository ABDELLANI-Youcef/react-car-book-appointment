import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const simpleRequest = async (authToken) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authToken,
      },
    };
    const response = await fetch('http://[::1]:3000/cars', options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const Home = ({ authToken }) => {
  simpleRequest(authToken);
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

Home.propTypes = {
  authToken: PropTypes.string.isRequired,
};

const mapStateToProp = (state) => ({
  authToken: state,
});
export default connect(mapStateToProp)(Home);
