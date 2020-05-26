import { User } from '../types/user.interface';
import { Modal } from './Modal';

export const user: Modal<User | null> = {
  state: null,
  reducers: {
    getUser(state, payload) {
      return payload;
    }
  }
};
