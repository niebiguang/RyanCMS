import { useAppSelector } from './useAppSelector';

export function useUser() {
  const user = useAppSelector('user');

  return {
    user
  };
}