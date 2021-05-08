import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.scss';

const Error = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>404 Page</h1>
      <Link to="/" className={styles.link}>
        Go to Home
      </Link>
    </main>
  );
};

export { Error };
