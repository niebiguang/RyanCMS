import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { config } from './config';
import { blogger } from './blogger';
import { createReducer } from './createReducer';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
  user: createReducer('user', user),
  config: createReducer('config', config),
  blogger: createReducer('blogger', blogger)
});

export type AppState = ReturnType<typeof rootReducer>;

export const getStore = (initStore: Partial<AppState>) => createStore(rootReducer, initStore);

export const dispatch = (handler: <T, P extends any = any>(state: T, payload: P) => T) => {
  const reduxDispatch = useDispatch();
  return reduxDispatch({ type: handler.name, payload: });
};

