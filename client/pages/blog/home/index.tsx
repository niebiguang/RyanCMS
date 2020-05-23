import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSSRProps, PromiseList } from '../../../hooks/useSSRProps';
import { useSelector } from 'react-redux';
import services from '../../../services';

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

  return <div>{JSON.stringify(state)}</div>;
}
