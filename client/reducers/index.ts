import { createStore, combineReducers } from 'redux';
import { createReducer } from './createReducer';
const rootReducer = combineReducers({
  user: createReducer(null, 'SET_USER'),
  config: createReducer({}, 'SET_CONFIG'),
});
export const getStore = (initStore: any) => createStore(rootReducer, initStore);
