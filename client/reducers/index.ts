import { createStore, combineReducers, PreloadedState } from 'redux';
import { user } from './user';
import { config } from './config';

const rootReducer = combineReducers({
  user,
  config,
});

export type AppState = ReturnType<typeof rootReducer>;

export const getStore = (initStore: Partial<AppState>) => createStore(rootReducer, initStore);
