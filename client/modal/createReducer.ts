
import { Modal } from './Modal';
export function createReducer<T>(prefix: string, modal: Modal<T>) {
  return (state = modal.state, action: { type: string, payload: T; }) => {
    const reducers = modal.reducers;
    const name = Object.keys(reducers).find(name => action.type === prefix + '-' + name);
    if (name) {
      return reducers[name](state, action.payload);
    }
    return state;

  };
}

export function createDispatch<T>(prefix: string, modal: Modal<T>) {

  Object.keys(modal.reducers || {}).forEach(name => {

  });
}