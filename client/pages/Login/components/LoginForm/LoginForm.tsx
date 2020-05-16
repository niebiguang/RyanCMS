import React from 'react';
import styles from './LoginForm.module.scss';

export function LoginForm() {

  return (
    <div className={styles['container']}>
      <div className={styles['title']}>
        登录
          <span className={styles['tip']}>
          {/* (没有账号？<Link to="/register">立即注册</Link>) */}
        </span>
      </div>

    </div>
  );
}
