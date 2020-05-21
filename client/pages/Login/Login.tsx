import React from 'react';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className={styles['container']}>
      <Link to="/hello">hell123o</Link>
      <div className={styles['box']}>asdaqweqwew</div>
    </div>
  );
}
