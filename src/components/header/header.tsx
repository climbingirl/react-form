import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import classNames from 'classnames';
import styles from './header.module.scss';

interface LinkClassProps {
  isActive: boolean;
}

const Header = () => {
  const linkClass = ({ isActive }: LinkClassProps) =>
    classNames({ [styles.nav_link]: true, [styles.nav_link_active]: isActive });

  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <NavLink className={linkClass} to={ROUTES.REGISTRATION_BASIC}>
          Basic registration
        </NavLink>
        <NavLink className={linkClass} to={ROUTES.REGISTRATION_HOOK_FORM}>
          Hook Form registration
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
