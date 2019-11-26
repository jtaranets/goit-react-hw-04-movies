import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to the Movies</h1>
    <div className={styles.linkContainer}>
      <NavLink
        className={styles.link}
        exact
        activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/movies"
      >
        Search Movies
      </NavLink>
    </div>
  </div>
);

export default Header;
