import React from 'react';
import styles from './index.module.scss';

export function BlogLayout({ children }: { children: React.ReactNode; }) {
  return (

    <div className={`row ${styles['container']}`}>
      <div className={`col-lg-5 col-md-6 col-sm-24 col-xs-24 ${styles['header']}`}>
        {/* <Header user={user} blogger={blogger} /> */}
      </div>
      <div className={`col-lg-19 col-md-18 col-sm-24 col-xs-24  ${styles['content']}`}>{children}</div>
    </div>
  );
}