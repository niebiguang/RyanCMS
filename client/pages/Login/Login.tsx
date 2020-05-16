import React from 'react';
import styles from './Login.module.scss';
import { LoginForm } from './components/LoginForm/LoginForm';

export function Login() {
  return (
    <div className={styles['container']}>
      <LoginForm />
    </div>
  );
}
