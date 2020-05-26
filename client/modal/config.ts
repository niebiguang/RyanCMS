import { Modal } from './Modal';
export interface Config {
  acceptHost: string;
}

export const config: Modal<Config> = {
  state: {
    acceptHost: ''
  },
  reducers: {

  }
};