import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSSRProps, PromiseList } from '../../../hooks/useSSRProps';
import { useSelector, useStore } from 'react-redux';
import services from '../../../services';
import styles from './index.module.scss';

export function Home() {

  const state = useSelector<any>((state) => state) as any;

  const getUser = useCallback(async () => {
    try {
      const userData = await services.user.visitor.getBaseUser({
        domain: state.config.acceptHost,
      });
      return userData;
    } catch (error) {
      console.log('error', error);
    }

  }, [state]);


  useSSRProps(async () => {
    const user = await getUser();
    return Promise.resolve({ user });
  });

  return <div className={styles.red}>{JSON.stringify(state)}</div>;
}
