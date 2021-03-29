import styles from '../styles/Welcome.module.css';

const Welcome = () => (
  <div className={styles.container}>
    <p>
      Welcome in our site. In this application we simulate
      the process to book appointments of cars.
    </p>
    <p>
      Please sign up or log in if you have already an account to use this plateform.
    </p>
  </div>
);

export default Welcome;
