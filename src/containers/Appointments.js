import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Appointments = ({ appointments }) => (
  <div>
    {appointments.map((a) => (<p key={a.id}>{a.city}</p>))}
  </div>
);

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProp = (state) => ({
  appointments: state.appointment,
});

export default connect(mapStateToProp)(Appointments);
