import { User } from '../types/user.interface';
import { Modal } from './Modal';

export const blogger: Modal<User | null> = {
  state: null,
  reducers: {
    setBlogger(state, payload) {
      return payload;
    }
  }
};
