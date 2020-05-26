import React from 'react';
import { useSSRProps } from '../../../hooks/useSSRProps';
import { useAppSelector } from '@/client/selector/useAppSelector';
import { useUser } from '@/client/selector/useUser';
import { useDispatch } from 'react-redux';
const styles = require('./index.module.scss');

export function Home() {

  const config = useAppSelector('config');
  const { getUser } = useUser();
  const dispatch = useDispatch();

  useSSRProps(async () => {
    const blogger = await getUser({
      domain: config.acceptHost
    });
    dispatch({
      type: 'SET_BLOGGER',
      payload: blogger
    });
  });

  return <div className={styles.red}>22222222222</div>;
}
