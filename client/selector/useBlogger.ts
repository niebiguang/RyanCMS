import { useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { User } from '../modal/user.interface';

export function useBlogger() {
  const blogger = useSelector<AppState, User>(state => state.user);

  return {
    blogger
  };
}