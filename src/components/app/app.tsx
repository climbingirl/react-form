import { Outlet } from 'react-router-dom';
import Header from '../header/header';
import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
