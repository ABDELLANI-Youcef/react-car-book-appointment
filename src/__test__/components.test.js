import renderer from 'react-test-renderer';
import {
  BrowserRouter,
} from 'react-router-dom';
import Welcome from '../components/Welcome';
import CreateCarForm from '../components/CreateCarForm';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import EditCarForm from '../components/EditCarForm';
import AppointmentMakingForm from '../components/AppointmentMakingForm';
import CarsTable from '../components/CarsTable';

it('should render the welcome page correctly', () => {
  const welcomePage = renderer.create(<Welcome />).toJSON;
  expect(welcomePage).toMatchSnapshot();
});

it('should render CreateCarForm correctly', () => {
  const createCarForm = renderer.create(<CreateCarForm clickHandler={(() => true)} />).toJSON();
  expect(createCarForm).toMatchSnapshot();
});

it('should render LoginForm correctly', () => {
  const loginForm = renderer.create(<LoginForm handleClick={(() => true)} />).toJSON();
  expect(loginForm).toMatchSnapshot();
});

it('should render SignUpForm correctly', () => {
  const signUpForm = renderer.create(<SignUpForm handleClick={(() => true)} />).toJSON();
  expect(signUpForm).toMatchSnapshot();
});

it('should render EditCarForm correctly', () => {
  const carObject = {
    id: 1,
    mark: 'Bugatti',
    model: 'Chiron',
    year: 2020,
    price: 500,
  };
  const editCarForm = renderer.create(<EditCarForm car={carObject} clickHandler={(() => true)} />)
    .toJSON();
  expect(editCarForm).toMatchSnapshot();
});

it('should render AppointmentMakingForm correctly', () => {
  const appointmentMakingForm = renderer.create(
    <AppointmentMakingForm clickHandler={(() => true)} />,
  ).toJSON();
  expect(appointmentMakingForm).toMatchSnapshot();
});

it('should render CarsTable correctly', () => {
  const carsList = [
    {
      id: 1,
      mark: 'Bugatti',
      model: 'Chiron',
      year: 2020,
      price: 500,
      image: 'img/test.png',
    },
  ];
  const carsTable = renderer.create(
    <BrowserRouter>
      <CarsTable admin cars={carsList} clickHandler={(() => true)} />
    </BrowserRouter>,
  ).toJSON();
  expect(carsTable).toMatchSnapshot();
});
