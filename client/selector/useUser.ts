import { useSelector } from 'react-redux';
import { AppState } from '../reducers';
import { User } from '../modal/user.interface';

export function useUser() {
  const user = useSelector<AppState, User>(state => state.user);

  return {
    user
  };
}