import { useAppSelector } from './useAppSelector';
import { useCallback } from 'react';
import services from '../services';

export function useUser() {
  const user = useAppSelector('user');

  const getUser = useCallback(async (params: {
    domain?: string;
    nickname?: string;
  }) => {

    const userData = await services.user.visitor.getBaseUser(params);
    return userData;

  }, []);

  return {
    user,
    getUser
  };
}