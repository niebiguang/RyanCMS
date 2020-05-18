import React, { useEffect } from 'react';
import { useSelector } from '../../../modal';

export function Home() {
  const { getUser } = useSelector('user');

  useEffect(() => {
    getUser()
  }, [])
  return <div>home</div>
}