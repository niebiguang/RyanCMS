import { useAppSelector } from './useAppSelector';

export function useBlogger() {
  const blogger = useAppSelector('blogger');

  return {
    blogger
  };
}