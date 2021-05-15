import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Fehler 404</h1>
      <Link to="/" className={styles.link}>
        Zur Startseite
      </Link>
    </main>
  );
};

export { Error };
