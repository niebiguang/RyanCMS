import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSSRProps, PromiseList } from '../../../hooks/useSSRProps';
import { useSelector, useStore } from 'react-redux';
import services from '../../../services';
import styles from './index.module.scss';

export function Home() {

  const state = useSelector<any>((state) => state) as any;

  const getUser = useCallback(async () => {
    const userData = await services.user.visitor.getBaseUser({
      domain: state.config.acceptHost,
    });
    return userData;

  }, [state.config.acceptHost]);


  useSSRProps(async () => {
    const blogger = await getUser();
    return Promise.resolve({ blogger });
  });

  return <div className={styles.red}>22222222222</div>;
}
