import { createReducer } from './createReducer';
export interface Config {
  acceptHost: string;
}
export const config = createReducer<Config>({ acceptHost: '' }, 'SET_CONFIG'); 