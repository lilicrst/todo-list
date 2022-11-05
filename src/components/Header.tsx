import styles from './Header.module.css';

import rocketLogo from '../assets/rocket-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocketLogo} alt="Logo do todo" />
      <p>to
        <span className={styles.title}>do</span>
      </p>      
    </ header>
  );
}