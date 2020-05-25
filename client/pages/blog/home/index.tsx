import React from 'react';
import { useSSRProps } from '../../../hooks/useSSRProps';
import { useAppSelector } from '@/client/selector/useAppSelector';
import { useUser } from '@/client/selector/useUser';
const styles = require('./index.module.scss');

export function Home() {

  const config = useAppSelector('config');
  const { getUser } = useUser();

  useSSRProps(async () => {
    const blogger = await getUser({
      domain: config.acceptHost
    });
    return Promise.resolve({ blogger });
  });

  return <div className={styles.red}>22222222222</div>;
}
